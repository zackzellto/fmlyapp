import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import "../../Styles/PremiumFeaturesStyles.css";
import fmfMap from "../..//assets/find-my-fmly-map.svg";
import fmfText from "../..//assets/find-my-fmly.svg";

type Props = {}

const PremiumFeatures = (props: Props) => {
  return (
    <div>
      <div className='premium-features-title'>Premium Features</div>
      <Grid>
      <div className='green-circle-pf' ><img className='find-my-fmly-map' srcSet={fmfMap} alt='fmfMap' ></img> </div>
      </Grid>
      <Grid>
       <img className='fmf-text-svg' srcSet={fmfText} ></img>
       <div className='fmf-text' >A premium feature that allows all of your fmly members 
to be found via GPS tracking*, providing peace of mind
and comfort...Or to pick something up on their way home... :)  </div>
        </Grid></div>
  )
}

export default PremiumFeatures