import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStated, setTimerStated] = useState(false);

  let timer;

  function handleStart() {
    setTimerStated(true);

    setTimerStated = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStated ? "handleStop" : handleStart}>
          {timerStated ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStated ? "active" : undefined}>
        {timerStated ? "Time is Running..." : "Timer inavtive"}
      </p>
    </section>
  );
}
