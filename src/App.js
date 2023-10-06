import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const handleOnNext = () => {
    setStep(step + 1);
  };
  const handleOnPrevious = () => {
    setStep(step - 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step{step}:{messages[step - 1]}
      </p>
      <div className="buttons">
        <button
        disabled={step <= 1}
          onClick={ handleOnPrevious}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
        disabled={step >= 3}
          onClick={handleOnNext}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
