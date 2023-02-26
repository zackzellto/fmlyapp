import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardMockup from "./DashboardMockup";
import "../../Styles/DashboardStyles.css";

const DashboardInfo = () => {
  return (
    <div>
      <Grid>The Dashboard</Grid>

      <div className="dashboard-info-bg">
        <Grid>
          <DashboardMockup />
        </Grid>
      </div>
    </div>
  );
};

export default DashboardInfo;
