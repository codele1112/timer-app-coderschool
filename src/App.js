import { formatTime } from "./components/formatTime";
import "./App.css";
import useTimer from "./components/useTimer";

function App() {
  const { time, handleStart, handleStop, handleReset } = useTimer(0);

  return (
    <div className="App">
      <h1 className="title">Timekeeper</h1>
      <div className="display">
        <p>{formatTime(time)}</p>
      </div>
      <div className="btn-group">
        <button className="btn green-btn" onClick={handleStart}>
          Start
        </button>
        <button className="btn red-btn" onClick={handleStop}>
          Stop
        </button>
        <button className="btn grey-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
