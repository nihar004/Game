import { useState, useRef } from "react";
import ResultModal from "./ResultModal.js";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStated, setTimerStated] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStated(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStated(false);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStated(false);
    setTimerExpired(false);
  }

  return (
    <>
      {timerExpired && (
        <ResultModal targetTime={targetTime} result="lost" ref={dialog} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStated ? handleStop : handleStart}>
            {timerStated ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStated ? "active" : undefined}>
          {timerStated ? "Time is Running..." : "Timer inavtive"}
        </p>
      </section>
    </>
  );
}
