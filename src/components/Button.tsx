import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = "",
  icon
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[rgba(96,64,7,1)] flex w-full flex-col text-white whitespace-nowrap text-center justify-center px-[70px] py-3 rounded-md hover:bg-[rgba(96,64,7,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(96,64,7,0.5)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors max-md:px-5 ${className}`}
      aria-disabled={disabled}
    >
      <div className="flex w-[115px] max-w-full items-stretch gap-5 justify-between mx-auto">
        <span className="my-auto">{children}</span>
        {icon && (
          <img
            src={icon}
            alt=""
            className="aspect-[1] object-contain w-4 shrink-0"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
};
