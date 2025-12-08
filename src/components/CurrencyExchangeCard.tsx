import React, { useState } from 'react';
import { CurrencySelector } from './CurrencySelector';

const currencies = [
  { code: 'GHS', flag: '' },
  { code: 'USD', flag: '' },
  { code: 'EUR', flag: '' },
  { code: 'GBP', flag: '' }
];

export const CurrencyExchangeCard: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('GHS');
  const [toCurrency, setToCurrency] = useState('USD');
  const [sendAmount, setSendAmount] = useState('200');
  const [receiveAmount, setReceiveAmount] = useState('47.58');

  const handleSendAmountChange = (value: string) => {
    setSendAmount(value);
    // Simple conversion calculation (in real app, this would use live rates)
    const rate = 0.2379; // Example rate
    const converted = (parseFloat(value) * rate).toFixed(2);
    setReceiveAmount(converted);
  };

  const handleSendMoney = () => {
    // Handle send money action
    console.log('Sending money:', { fromCurrency, toCurrency, sendAmount, receiveAmount });
  };

  return (
    <section className="bg-[rgba(255,250,240,1)] flex w-full flex-col items-stretch px-[62px] py-[82px] rounded-3xl max-md:max-w-full max-md:px-5">
      <div className="self-center flex w-[492px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/d3db62366a691239fa79eab09e756bd3676d7647?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[54px] shadow-[0px_0px_40px_rgba(38,103,255,0.1)] shrink-0 mt-[179px] rounded-[50%] max-md:mt-10"
          alt="Currency exchange icon"
        />
        
        <form className="flex flex-col items-stretch justify-center p-[38px] rounded-[19px] max-md:px-5">
          <div className="w-full">
            <div className="w-full">
              <div className="flex min-h-[55px] w-full items-center gap-[19px] rounded-md border border-[rgba(200,216,239,1)] bg-white">
                <CurrencySelector
                  value={fromCurrency}
                  onChange={setFromCurrency}
                  currencies={currencies}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/846e2f0887e79000f17f20192709f34061f1a42c?placeholderIfAbsent=true"
                  className="object-contain w-px self-stretch shrink-0"
                  alt="Separator"
                />
                <div className="self-stretch w-[47px] my-auto">
                  <label className="text-slate-500 text-[11px] font-normal leading-loose tracking-[-0.33px] block">
                    You send
                  </label>
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => handleSendAmountChange(e.target.value)}
                    className="text-slate-950 text-sm font-medium leading-loose tracking-[-0.42px] bg-transparent border-none outline-none w-full"
                    aria-label="Amount to send"
                  />
                </div>
              </div>
              
              <div className="flex min-h-[55px] w-full items-center gap-[19px] mt-[11px] rounded-md border border-[rgba(200,216,239,1)] bg-white">
                <CurrencySelector
                  value={toCurrency}
                  onChange={setToCurrency}
                  currencies={currencies}
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/846e2f0887e79000f17f20192709f34061f1a42c?placeholderIfAbsent=true"
                  className="object-contain w-px self-stretch shrink-0"
                  alt="Separator"
                />
                <div className="self-stretch w-[77px] my-auto">
                  <label className="text-slate-500 text-[11px] font-normal leading-loose tracking-[-0.33px] block">
                    Recipient will get
                  </label>
                  <div className="text-slate-950 text-sm font-medium leading-loose tracking-[-0.42px]">
                    {receiveAmount}
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleSendMoney}
              className="bg-[rgba(96,64,7,1)] flex min-h-[41px] max-w-full w-[266px] items-center gap-[3px] text-[13px] text-white font-medium tracking-[-0.25px] justify-center mt-[19px] p-[13px] rounded-md hover:bg-[rgba(86,54,0,1)] transition-colors"
              aria-label="Send money"
            >
              <span>Send money</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/8c94fb200cd1edbf108c6319b4887fa101743128?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                alt="Send arrow"
              />
            </button>
          </div>
        </form>
        
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/7b4a7a340a5ca6fea7b1fac5e3ac6baa23873670?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[54px] shadow-[0px_0px_40px_rgba(38,103,255,0.1)] shrink-0 rounded-[50%]"
          alt="Currency exchange icon"
        />
      </div>
      
      <div className="text-center mt-[31px] max-md:max-w-full">
        <h3 className="text-slate-950 text-2xl font-medium leading-none tracking-[-0.72px] max-md:max-w-full">
          Multi Currency Support
        </h3>
        <p className="text-slate-500 text-base font-normal leading-6 tracking-[-0.48px] mt-3 max-md:max-w-full">
          Manage payments effortlessly across currencies with Ndelpay. Whether for personal use or business, our app streamlines your transactions and keeps you in control of your global finances.
        </p>
      </div>
    </section>
  );
};
