import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
    <Steps />
      <Steps />
      <Steps />
      <Steps />
    </div>
  );

  function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setisOpen] = useState(true);
    const handleOnNext = () => {
      setStep((s) => s + 1);
    };
    const handleOnPrevious = () => {
      setStep((s) => s - 1);
    };
    const onHandleClose = () => {
      setisOpen((isOpen) => !isOpen);
    };
    return (
      <div>
        <div className="close" onClick={onHandleClose}>
          &times;
        </div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step{step}:{messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                disabled={step <= 1}
                onClick={handleOnPrevious}
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
        )}
      </div>
    );
  }
}
