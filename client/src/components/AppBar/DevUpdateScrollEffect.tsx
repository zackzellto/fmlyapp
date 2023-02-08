import React from "react";
import "../../Styles/DevUpdateScrollAnimation.css";

type Props = {};

const DevUpdateScrollEffect = (props: Props) => {
  return (
    <>
      <p className="marquee">
        <span className="dev-update-text">
          <text className="dev-update">Development Update: </text>
          fmly is being developed by one developer at the moment. I will provide
          updates consistantly about the state of the application!
        </span>
      </p>
    </>
  );
};

export default DevUpdateScrollEffect;
