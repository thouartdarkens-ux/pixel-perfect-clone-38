import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  inputClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  inputClassName = ""
}) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`${className}`}>
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium leading-none text-[rgba(2,8,23,1)]"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`bg-white border-slate-200 border flex w-[306px] shrink-0 max-w-full h-10 mt-3.5 rounded-md border-solid px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputClassName}`}
        aria-required={required}
      />
    </div>
  );
};
