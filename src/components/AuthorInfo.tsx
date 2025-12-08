import React from 'react';

interface AuthorInfoProps {
  name: string;
  title: string;
  avatarSrc: string;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ name, title, avatarSrc }) => {
  return (
    <div className="bg-white border flex w-full items-stretch gap-5 tracking-[-0.36px] justify-between mt-2 pt-[9px] pb-[15px] px-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
      <div className="flex items-stretch gap-3 text-base text-[rgba(29,29,29,1)] font-semibold leading-loose">
        <img
          src={avatarSrc}
          alt={`${name}'s profile picture`}
          className="aspect-[0.98] object-contain w-[54px] shrink-0 rounded-[100px]"
        />
        <div className="my-auto">{name}</div>
      </div>
      <div className="text-[rgba(148,154,169,1)] text-xs font-normal leading-loose my-auto">
        {title}
      </div>
    </div>
  );
};
