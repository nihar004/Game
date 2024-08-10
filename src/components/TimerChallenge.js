export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <botton>Start Challenge</botton>
      </p>
      <p className="">Time is Running... / Timer inavtive</p>
    </section>
  );
}
