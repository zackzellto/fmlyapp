import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardMockup from "./DashboardMockup";
import "../../Styles/DashboardStyles.css";
import InfoArrow from "../../assets/info-arrow.svg";

const DashboardInfo = () => {
  return (
    <div>
      <Grid>The Dashboard</Grid>
      <img className="info-arrow" srcSet={InfoArrow}></img>
      <Grid>
        <DashboardMockup />
      </Grid>
    </div>
  );
};

export default DashboardInfo;
