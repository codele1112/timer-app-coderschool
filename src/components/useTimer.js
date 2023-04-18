import { useState, useRef } from "react";

function useTimer(ini = 0) {
  const [time, setTime] = useState(0);

  const isStart = useRef(true);
  const active = useRef();
  let intervalValid = useRef(0);

  const handleStart = () => {
    active.current.disabled = true;

    isStart.current = true;

    intervalValid.current = setInterval(() => {
      if (isStart.current) {
        setTime((prev) => (prev += 1));
      }
    }, 1000);
    console.log("start", intervalValid.current);
  };

  const handleStop = () => {
    isStart.current = false;

    clearInterval(intervalValid.current);

    active.current.disabled = false;

    console.log("stop", intervalValid.current);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalValid.current);

    active.current.disabled = false;
  };
  return { time, handleStart, handleStop, handleReset, active };
}

export default useTimer;
