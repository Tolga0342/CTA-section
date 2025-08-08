import "./App.css";
import { BodyText } from "./components/BodyText";
import { Button } from "./components/Button";
import { LabelTitle } from "./components/LabelTitle";
import { ImageCTA } from "./UI/ImageCTA";

export const App = () => {
  return (
    <>
      <div className="cta-section">
        <div className="frame">
          <div className="label-title-link ">
            <div className="label-subtitle">
              <LabelTitle />
            </div>
            <BodyText />
            <Button />
          </div>
          <div className="content ">
            <div className="image-cta-left">
              <ImageCTA />
            </div>
            <div className="image-cta-right">
              <ImageCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
