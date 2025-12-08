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
    <form onSubmit={handleSubmit} className="w-full max-w-[560px] px-4 sm:px-0">
      <div className="bg-[rgba(255,255,255,0.33)] border flex w-full items-center gap-2 sm:gap-5 text-white font-normal flex-col sm:flex-row mt-6 sm:mt-[37px] p-2 sm:pl-[29px] sm:pr-[9px] sm:py-[9px] rounded-2xl sm:rounded-[100px] border-white border-solid">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="text-base sm:text-lg tracking-[-0.36px] bg-transparent border-none outline-none placeholder-white flex-1 min-w-0 w-full text-center sm:text-left py-3 sm:py-0"
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[rgba(46,32,6,1)] w-full sm:w-auto text-sm sm:text-base text-center leading-none px-6 sm:px-[33px] py-4 sm:py-[22px] rounded-xl sm:rounded-[100px] hover:bg-[rgba(56,42,16,1)] transition-colors disabled:opacity-50"
        >
          <div>{isSubmitting ? 'Joining...' : 'Join The Waitlist'}</div>
        </button>
      </div>
    </form>
  );
};

export default EmailSignup;
