import "./ImageCTA.css";
import { FaArrowRight } from "react-icons/fa";

export const ImageCTA = () => {
  return (
    <div className="image-cta-container">
      <div className="image-cta-image">
        <div className="gradient-bottom" />
        <div className="frame-title-plain-button">
          <div className="title-plaintext-container">
            <div className="title-image"> Title</div>
            <div className="plain-text">
              Supporting text about the call-to-action goes here.
            </div>
          </div>
          <div className="arrow-button-container">
            <div className="arrow-icon">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
