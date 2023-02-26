import React from "react";
import DashboardMockupSVG from "../../assets/fmly-dashboard.svg";

const DashboardMockup = () => {
  return (
    <div>
      <img
        className="dashboard-mockup-svg"
        srcSet={DashboardMockupSVG}
        alt="dashboard-mockup"
      ></img>
    </div>
  );
};

export default DashboardMockup;
