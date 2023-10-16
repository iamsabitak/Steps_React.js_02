import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  // const date = new Date("Oct 10 2023");
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleClick = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep(step - 1)}>-</button> */}
        <span>Step:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Count: {count}</span> */}
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleClick}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

export default Count;
