import { useState, useRef } from "react";

function useTimer(initialTime = 0) {
  const [time, setTime] = useState(0);
  let intervalValid = useRef();

  const handleStart = () => {
    intervalValid.current = setInterval(() => {
      setTime((prev) => (prev += 1));
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalValid.current);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalValid.current);
  };
  return { time, handleStart, handleStop, handleReset };
}

export default useTimer;
