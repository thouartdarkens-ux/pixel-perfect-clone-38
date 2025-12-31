import React, { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  const targetDate = new Date('2026-01-14T00:00:00');

  const calculateTimeLeft = (): TimeUnit[] => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return [
        { value: 0, label: 'Days' },
        { value: 0, label: 'Hrs' },
        { value: 0, label: 'Mins' },
        { value: 0, label: 'Secs' }
      ];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hrs' },
      { value: minutes, label: 'Mins' },
      { value: seconds, label: 'Secs' }
    ];
  };

  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 w-full max-w-[540px] gap-2 sm:gap-5 text-center mt-6 sm:mt-[41px]">
      {timeLeft.map((unit) => (
        <div
          key={unit.label}
          className="bg-[rgba(244,244,244,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center px-2 sm:px-6 py-3 sm:py-[23px] rounded-lg sm:rounded-[10px]"
        >
          <div className="text-[rgba(34,34,34,1)] text-lg sm:text-2xl font-semibold">
            {unit.value}
          </div>
          <div className="text-[rgba(119,119,119,1)] text-sm sm:text-[22px] font-normal mt-1 sm:mt-4">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
