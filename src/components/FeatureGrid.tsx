import React from 'react';

interface FeatureGridProps {
  leftImage: string;
  rightImage: string;
  centerImage: string;
  description: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  leftImage,
  rightImage,
  centerImage,
  description
}) => {
  return (
    <section 
      className="self-stretch w-full mt-[34px] max-md:max-w-full"
      aria-labelledby="features-heading"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[29%] max-md:w-full max-md:ml-0">
          <img
            src={leftImage}
            alt="Student marketplace feature showcase"
            className="aspect-[0.79] object-contain w-full grow mt-[37px] max-md:max-w-full"
          />
        </div>
        
        <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="text-lg text-[rgba(148,154,169,1)] font-normal text-center tracking-[-0.36px] leading-[27px] max-md:max-w-full">
            <p 
              className="ml-[13px] mr-3 max-md:max-w-full max-md:mr-2.5"
              id="features-heading"
            >
              {description}
            </p>
            <img
              src={centerImage}
              alt="Hallway marketplace interface preview"
              className="aspect-[1.85] object-contain w-full shadow-[0px_34px_34px_rgba(10,67,128,0.1)] mt-[130px] rounded-3xl max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
        
        <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src={rightImage}
            alt="Campus commerce platform features"
            className="aspect-[0.79] object-contain w-full grow mt-[37px] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
