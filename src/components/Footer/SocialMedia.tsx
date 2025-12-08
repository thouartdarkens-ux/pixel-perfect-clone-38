import React from 'react';

const SocialMedia: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`Open ${platform} social media`);
  };

  return (
    <div className="flex flex-col items-stretch text-base text-[rgba(29,29,29,1)] font-normal tracking-[-0.36px] leading-loose">
      <h3>Social Media</h3>
      <button 
        onClick={() => handleSocialClick('social')}
        className="mt-4 sm:mt-[31px] hover:opacity-80 transition-opacity"
        aria-label="Visit our social media profiles"
      >
        <img
          src="/images/social-media-icons.png"
          className="aspect-[6.33] object-contain w-full max-w-[304px]"
          alt="Social media icons"
        />
      </button>
    </div>
  );
};

export default SocialMedia;
