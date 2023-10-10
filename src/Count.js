import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("Oct 10 2023");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </>
  );
}

export default Count;
