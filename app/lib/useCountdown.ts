// lib/useCountdown.ts
"use client";
import { useEffect, useState } from "react";

export function useCountdown(deadline: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const formattedDeadline = deadline.replace(" ", "T");
    const deadlineTime = new Date(formattedDeadline).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadlineTime - now;

      if (distance < 0) {
        setTimeLeft((prev) => ({ ...prev, expired: true }));
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, expired: false });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return timeLeft;
}