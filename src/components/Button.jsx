import "./Button.css";
import { FiArrowRight } from "react-icons/fi";

export const Button = () => {
  return (
    <div className="button">
      <div className="button-text">Optional button</div>
      <div className="icon-container">
        <FiArrowRight className="icon-arrow" />
      </div>
    </div>
  );
};
