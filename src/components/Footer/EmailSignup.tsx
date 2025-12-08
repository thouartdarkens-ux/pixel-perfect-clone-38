import React, { useState } from 'react';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for joining our waitlist!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[rgba(255,255,255,0.33)] border flex w-[560px] max-w-full items-stretch gap-5 text-white font-normal flex-wrap justify-between mt-[37px] pl-[29px] pr-[9px] py-[9px] rounded-[100px] border-white border-solid max-md:pl-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="text-lg tracking-[-0.36px] my-auto bg-transparent border-none outline-none placeholder-white flex-1"
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[rgba(46,32,6,1)] flex flex-col items-stretch text-base text-center leading-none justify-center px-[33px] py-[22px] rounded-[100px] max-md:px-5 hover:bg-[rgba(56,42,16,1)] transition-colors disabled:opacity-50"
        >
          <div>{isSubmitting ? 'Joining...' : 'Join The Waitlist'}</div>
        </button>
      </div>
    </form>
  );
};

export default EmailSignup;
