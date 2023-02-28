import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardMockup from "./DashboardMockup";
import "../../Styles/DashboardStyles.css";
import InfoArrowFmlychat from "../../assets/info-arrow-fmlychat.svg";
import InfoArrowDinnertime from "../../assets/info-arrow-dinnertime.svg";
import InfoArrowCashQuest from "../../assets/info-arrow-cashquest.svg";
import InfoArrowGroceries from "../../assets/info-arrow-groceries.svg";

const DashboardInfo = () => {
  return (
    <div>
      <Grid>
        <div className="dashboard-info-title">The Dashboard</div>
      </Grid>
      <img className="info-arrow-cashquest" srcSet={InfoArrowCashQuest}></img>
      <img className="info-arrow-fmlychat" srcSet={InfoArrowFmlychat}></img>
      <img className="info-arrow-dinnertime" srcSet={InfoArrowDinnertime}></img>
      <img className="info-arrow-groceries" srcSet={InfoArrowGroceries}></img>
      <Grid>
        <DashboardMockup />
      </Grid>
      <Grid
        sx={{
          marginBottom: "30px",
        }}
      >
        <div className="info-card-cashquest">
          <div className="info-text">
            Cash Quest is a creative way to teach kids about money management
            and hard work. It allows setting challenging goals that can be
            rewarded with money set by parents and serves as a visual motivator
            for accountability in family life.
          </div>
        </div>
      </Grid>
      <Grid
        sx={{
          marginBottom: "30px",
        }}
      >
        <div className="info-card-fmlychat">
          <div className="info-text">
            fmlychat is a messaging system that provides ease-of-use directly in
            the fmly app. You can chat one-on-one, add fmly members to group
            chats, share images, videos, links, etc...
          </div>
        </div>
      </Grid>
      <Grid
        sx={{
          marginBottom: "30px",
        }}
      >
        <div className="info-card-dinnertime">
          <div className="info-text">
            dinnertime allows for families to come together to provide input on
            what sounds good for family meals. Share recipes, images, or full
            articles to decide what’s for dinner! Helping cook or prepare is
            also a great use of the bountyboard!
          </div>
        </div>
      </Grid>
      <Grid>
        <div className="info-card-groceries">
          <div className="info-text">
            Groceries, lets families collaborate on a list for food and home
            supplies. Share the list and even delegate access for others to add
            items at their discretion. Picking up the supplies can also be
            assigned as a bounty on the bountyboard!
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default DashboardInfo;
