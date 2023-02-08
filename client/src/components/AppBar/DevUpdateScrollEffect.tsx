import { Grid } from "@material-ui/core";
import React from "react";
import "../../Styles/DevUpdateScrollAnimation.css";

type Props = {};

const DevUpdateScrollEffect = (props: Props) => {
  return (
    <>
      <Grid container>
        <div className="dev-update-bar">
          <text className="marquee">
            <span className="dev-update-text">
              <text className="dev-update">Development Update: </text>
              fmly is being developed by one developer at the moment. I will
              provide updates consistantly about the state of the application!
            </span>
          </text>
        </div>
      </Grid>
    </>
  );
};

export default DevUpdateScrollEffect;
