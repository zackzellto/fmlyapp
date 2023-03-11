import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import "../../Styles/PremiumFeaturesStyles.css";
import fmfMap from "../..//assets/find-my-fmly-map.svg";

type Props = {}

const PremiumFeatures = (props: Props) => {
  return (
    <div>
      <div className='premium-features-title'>Premium Features</div>
      <Grid>
      <div className='green-circle-pf' ><img className='find-my-fmly-map' srcSet={fmfMap} alt='fmfMap' ></img> </div>
      </Grid></div>
  )
}

export default PremiumFeatures