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
            <strong>Developer Update:</strong> We are currently working on a new
            feature that will allow you to create your own custom playlists.
            Stay tuned for more updates!
          </span>
        </div>
      </div>
    </>
  );
};

export default DevUpdateScrollEffect;
