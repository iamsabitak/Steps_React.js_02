import { useState } from "react";
// import Count from "./Count";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <h3>😏</h3>
      </StepMessage>
      <StepMessage step={1}>
        <p>Read Children Props</p>
        <h3>🧐</h3>
      </StepMessage>

      {/* <Count /> */}
    </div>
  );
}

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
          <StepMessage step={step}>{messages[step - 1]}
          <div className="buttons">
          <Button
            textColor={"#fff"}
            bgColor={"#7950f2"}
            onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
          > <span>Learn how</span></Button>
          </div>
          </StepMessage>

          <div className="buttons">
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handleOnPrevious}
              // text={"Previous"}
              // emoji={"👈"}
              disabled={step <= 1}
            >
              Previous<span>👈</span>
            </Button>

            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handleOnNext}
              // text={"Next"}
              // emoji={"👉"}
              disabled={step >= 3}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step{step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, onClick, bgColor, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
      {/* <span>{emoji}</span>{text} */}
    </button>
  );
}
