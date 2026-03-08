import { useState, useEffect } from "react";
import "./Countdown.css";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-12T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div className="time-box" key={interval}>
      <div className="number">{timeLeft[interval]}</div>
      <div className="label">{interval}</div>
    </div>
  ));

  return (
    <div className="countdown-container">
      {timerComponents.length ? timerComponents : <span>🎉 It's Wedding Day! 🎉</span>}
    </div>
  );
}