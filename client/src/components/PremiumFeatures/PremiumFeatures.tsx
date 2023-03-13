import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import "../../Styles/PremiumFeaturesStyles.css";
import fmfMap from "../..//assets/find-my-fmly-map.svg";
import fmfText from "../..//assets/find-my-fmly.svg";
import bountyboardMinimal from "../..//assets/bountyboard-minimal-view.svg";

type Props = {}

const PremiumFeatures = (props: Props) => {
  return (
    <div>
      <div className='premium-features-title'>Premium Features</div>
      <Grid>
      <div className='orange-circle-pf' ><img className='find-my-fmly-map' srcSet={fmfMap} alt='fmfMap' ></img> </div>
      </Grid>
      <Grid>
       <img className='fmf-text-svg' srcSet={fmfText} ></img>
       <div className='fmf-text' >A premium feature that allows all of your fmly members 
to be found via GPS tracking*, providing peace of mind
and comfort...Or to pick something up on their way home... :)  </div>
        </Grid>
        <Grid>
          <div className='blue-square-pf' >
          <img className='bountyboard-minimal-view' srcSet={bountyboardMinimal} alt='bountyboardMinimal' ></img>
          </div>
         
          </Grid> <div className='bountyboard-blue-title' >bountyboard</div>
          <div className='bountyboard-blue-text' >The bountyboard®, the new way to turn boring household chores into an exciting and rewarding game! With bountyboard®, you and your family can earn points and rewards for completing a variety of household tasks, making cleaning and organizing your home a fun and engaging activity, while also adding a bit of friendly competition!</div></div>
  )
}

export default PremiumFeatures