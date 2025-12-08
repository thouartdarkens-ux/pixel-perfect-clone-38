import React, { useState } from 'react'
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { TextArea } from './TextArea';
import { Button } from './Button';

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    school: string;
    productMessage: string;
  }
  
function basicinfo() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        school: '',
        productMessage: ''
      });
    
      const handleInputChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setFormData(prev => ({
          ...prev,
          [field]: e.target.value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
      };
    
      return (
        <main className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-[871px] mx-auto">
            <form onSubmit={handleSubmit} className="rounded-lg">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <FormSection className="mr-[-25px] pr-20 py-[79px] max-md:mr-0 max-md:pr-5">
                    <header className="mb-[60px]">
                      <h1 className="text-xl font-semibold leading-[1.4] tracking-[-0.5px] text-[rgba(2,8,23,1)]">
                        Basic Information
                      </h1>
                      <p className="text-slate-500 font-normal leading-none mt-[18px]">
                        Enter your credentials to create your account
                      </p>
                    </header>
                    
                    <fieldset className="space-y-[30px]">
                      <legend className="sr-only">Personal Information</legend>
                      
                      <InputField
                        label="Full name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange('fullName')}
                        required
                      />
                      
                      <InputField
                        label="Email address"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                      />
                      
                      <InputField
                        label="Phone number"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange('phoneNumber')}
                        required
                      />
                    </fieldset>
                  </FormSection>
                </div>
                
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <FormSection className="text-[rgba(141,141,141,1)]">
                    <fieldset className="space-y-6">
                      <legend className="sr-only">Institution and Product Information</legend>
                      
                      <InputField
                        label="School / Institution"
                        type="text"
                        placeholder="Enter your school or institution"
                        value={formData.school}
                        onChange={handleInputChange('school')}
                        className="text-[rgba(2,8,23,1)] ml-[15px] max-md:ml-2.5"
                        inputClassName="w-[392px] max-md:w-full"
                        required
                      />
                      
                      <div className="mt-[55px] max-md:mt-10">
                        <TextArea
                          label="Type of products you intend to sell"
                          placeholder="Write your message.."
                          value={formData.productMessage}
                          onChange={handleInputChange('productMessage')}
                          className="max-md:ml-[5px]"
                        />
                        
                        <div className="mt-4 max-md:ml-[5px] max-md:mr-1.5">
                          <img
                            src="/images/product-illustration.png"
                            alt="Product illustration"
                            className="aspect-[333.33] object-contain w-full"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-[130px] max-md:mt-10">
                        <Button
                          type="submit"
                          icon="/images/icon-arrow-right.png"
                        >
                          Next
                        </Button>
                      </div>
                    </fieldset>
                  </FormSection>
                </div>
              </div>
            </form>
          </div>
        </main>
      );
}

export default basicinfo
