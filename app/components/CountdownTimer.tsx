// components/CountdownTimer.tsx
"use client";
import { CiLock } from "react-icons/ci";
import { useCountdown } from "../lib/useCountdown";


export default function CountdownTimer({ deadline }: { deadline: string }) {
  const { days, hours, minutes, seconds, expired } = useCountdown(deadline);

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center items-center mb-4">
        <p className="text-[56px] xs:text-[66px] sm:text-[76px] font-bold">20</p>
        <p className="font-medium text-[18px] xs:text-[20px] flex flex-col gap-[8px] xs:gap-[10px]">
          <span>%</span>
          <span>off</span>
        </p>
      </div>
      <p className="text-[18px] xs:text-[20px]">Now</p>
      <div className="max-w-[400px] mx-auto">
        <p className="text-[16px] xs:text-[22px] sm:text-[25px] font-bold py-3 px-4 text-center bg-[#96D8FA] rounded-full shadow-md">
          Get Organized, Stay Ahead
        </p>
      </div>

      <p className="text-[16px]">
        The <strong>{`Freelancer's Toolkit`}</strong> is just <strong>$1</strong> —
        but only for:
      </p>

      {expired ? (
        <div className="text-red-600 font-bold text-xl flex justify-center items-center flex-col">
          <CiLock size={50} strokeWidth={0.5} />
          <p>Offer Expired!</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex justify-center items-center gap-2  xs:gap-4 text-center">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((unit, index, arr) => (
              <div key={unit.label} className="flex justify-center gap-2 xxs:gap-3 ">
                <div className="flex flex-col items-center gap-2">
                  {/* Split each number into individual digits */}
                  <div className="flex gap-1 xxs:gap-2 justify-center items-center">
                    {unit.value
                      .toString()
                      .padStart(2, "0") // Ensure at least 2 digits
                      .split("")
                      .map((digit, idx) => (
                        <span
                          key={idx}
                          className="bg-[#b9c2f1] text-[16px] xxs:text-xl xs:text-2xl md:text-3xl font-extrabold h-6 xxs:h-8 w-6 xxs:w-8 xs:w-9 sm:w-10 xs:h-9 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-black shadow-md animate-pulse"
                        >
                          {digit}
                        </span>
                      ))}
                  </div>
                  <span className="text-[9px] xs:text-[10px] font-medium text-white bg-black p-[2px] xs:p-1 rounded-full w-[90%]">
                    {unit.label}
                  </span>
                </div>
                <div>
                  {/* Add colon between units, except after the last one */}
                  {index < arr.length - 1 && (
                    <span className="text-xl xs:text-2xl sm:text-3xl font-bold">:</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm md:text-base select-none">
              more. Invest in your productivity before this exclusive offer
              expires.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% {  transform: scale(1) }
          50% {  0.75; transform: scale(1.05) }
        }
        .animate-pulse {
          animation: pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
