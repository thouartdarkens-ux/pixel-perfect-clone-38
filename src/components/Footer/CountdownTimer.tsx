import React, { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 140, label: 'Days' },
    { value: 1, label: 'Hrs' },
    { value: 34, label: 'Mins' },
    { value: 29, label: 'Secs' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = [...prevTime];
        
        // Decrement seconds
        if (newTime[3].value > 0) {
          newTime[3].value -= 1;
        } else {
          newTime[3].value = 59;
          
          // Decrement minutes
          if (newTime[2].value > 0) {
            newTime[2].value -= 1;
          } else {
            newTime[2].value = 59;
            
            // Decrement hours
            if (newTime[1].value > 0) {
              newTime[1].value -= 1;
            } else {
              newTime[1].value = 23;
              
              // Decrement days
              if (newTime[0].value > 0) {
                newTime[0].value -= 1;
              }
            }
          }
        }
        
        return newTime;
      });
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
