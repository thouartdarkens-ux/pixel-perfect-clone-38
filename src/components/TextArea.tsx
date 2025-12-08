import React from 'react';

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = ""
}) => {
  const textareaId = `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`${className}`}>
      <label 
        htmlFor={textareaId}
        className="block text-xs leading-loose text-[rgba(141,141,141,1)]"
      >
        {label}
      </label>
      <div className="text-sm text-[rgba(141,141,141,1)] mt-[5px]">
        {placeholder}
      </div>
      <textarea
        id={textareaId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-4 p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={4}
        aria-required={required}
      />
    </div>
  );
};
