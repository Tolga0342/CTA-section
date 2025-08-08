import "./LabelTitle.css";

export const LabelTitle = () => {
  return (
    <>
      <div className="label"> Label</div>
      <div className="title">
        <span className="title-part-main">
          Mandatory title about the &nbsp;
        </span>
        <span className="title-combo">
          <span className="title-part-highlight">call-to-action</span>
          <span className="title-part-main">&nbsp;here</span>
        </span>
      </div>

      <div className="title-mobile">
        <span className="title-part-main-mobile">Mandatory title</span>
        <span className="title-combo-mobile">
          <span className="title-part-main-mobile">about the </span>
          <span className="title-part-highlight-mobile">&nbsp;call-to-</span>
        </span>
        <span className="title-combo-mobile">
          <span className="title-part-highlight-mobile">action</span>
          <span className="title-part-main-mobile">&nbsp;here</span>
        </span>
      </div>
    </>
  );
};
