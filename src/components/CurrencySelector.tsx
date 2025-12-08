import React, { useState } from 'react';

interface CurrencySelectorProps {
  value: string;
  onChange: (value: string) => void;
  currencies: { code: string; flag: string }[];
  className?: string;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onChange,
  currencies,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCurrency = currencies.find(c => c.code === value);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[13px] text-black font-normal whitespace-nowrap tracking-[-0.38px] leading-normal w-[72px] px-[13px] py-2 hover:bg-gray-50 transition-colors"
        aria-label={`Select currency, currently ${value}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedCurrency?.code || value}</span>
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/26d4f27bf44b8a1d28f2e2ad5d339dbdf0b441ff?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[13px] shrink-0"
          alt="Dropdown arrow"
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-200 rounded-md shadow-lg min-w-[100px]">
          <ul role="listbox" className="py-1">
            {currencies.map((currency) => (
              <li key={currency.code}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(currency.code);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
                  role="option"
                  aria-selected={currency.code === value}
                >
                  <span>{currency.code}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
