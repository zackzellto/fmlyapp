import DashboardMockupSVG from "../../assets/fmly-dashboard.svg";

const DashboardMockup = () => {
  return (
    <div>
      <div className="purple-bg-mockup">
        <img
          className="dashboard-mockup-svg"
          srcSet={DashboardMockupSVG}
          alt="dashboard-mockup"
        ></img>
      </div>
    </div>
  );
};

export default DashboardMockup;
