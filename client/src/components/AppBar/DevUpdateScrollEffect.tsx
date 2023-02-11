import { Grid } from "@material-ui/core";
import React from "react";
import "../../Styles/DevUpdateScrollAnimation.css";

type Props = {};

const DevUpdateScrollEffect = (props: Props) => {
  return (
    <>
      <div className="dev-update-container">
        <div className="dev-update-bar marquee">
          <span className="dev-update-text">
            <strong>Developer Update:</strong> The app is currently in
            development, and we're working hard to get it ready for launch!
            We're currently working on the backend, and will be releasing a beta
            version soon. Stay tuned!
          </span>
        </div>
      </div>
    </>
  );
};

export default DevUpdateScrollEffect;
