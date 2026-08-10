import { use } from "react";
import { useState, useEffect } from "react";
export const QuestionTimer = function ({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
    const timeOut = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timeOut);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
};
