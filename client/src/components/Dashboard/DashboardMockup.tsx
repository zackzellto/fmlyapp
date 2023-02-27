import React from "react";
import styled from "styled-components";
import DashboardMockupSVG from "../../assets/fmly-dashboard.svg";

const PurpleBG = styled.div`
  background-color: #d1b2ff;
  margin: auto;
  height: 1100px;
  width: 1300px;
  padding: 10px;
  border-radius: 20px;
`;

const DashboardMockup = () => {
  return (
    <div>
      <PurpleBG>
        <img
          className="dashboard-mockup-svg"
          srcSet={DashboardMockupSVG}
          alt="dashboard-mockup"
        ></img>
      </PurpleBG>
    </div>
  );
};

export default DashboardMockup;
