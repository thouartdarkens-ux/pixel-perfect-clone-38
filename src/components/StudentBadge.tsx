import React from 'react';

interface StudentBadgeProps {
  text: string;
  iconSrc: string;
}

export const StudentBadge: React.FC<StudentBadgeProps> = ({ text, iconSrc }) => {
  return (
    <div className="flex items-stretch gap-2 text-[rgba(96,64,7,1)] leading-loose px-2 py-[9px] rounded-[100px]">
      <img
        src={iconSrc}
        alt=""
        className="aspect-[1] object-contain w-7 shrink-0 rounded-[100px]"
      />
      <span className="basis-auto mt-2.5">
        {text}
      </span>
    </div>
  );
};
