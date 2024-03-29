import { Alert, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "../Styles/HomeScreenStyles.css";
import QRCode from ".././assets/qrcode-download-app.svg";
import AppStoreButton from ".././assets/ios-download-button.svg";
import PlayStoreButton from ".././assets/android-download-button.svg";
import FreePricingModel from "../components/Cards/PricingStructureFree";
import PremiumPricingModel from "../components/Cards/PricingStructureUpgrade";
import WoodenHandMockup from ".././assets/wooden-hand-mockup.svg";
import SubscriptionPricingModel from "../components/Cards/PricingStructureSubscribe";
import { WaitlistSignupForm } from "../components/Forms/Waitlist/WaitlistSignupForm";
import DevUpdateScrollEffect from "../components/AppBar/DevUpdateScrollEffect";
import DashboardInfo from "../components/Dashboard/DashboardInfo";
import PremiumFeatures from "../components/PremiumFeatures/PremiumFeatures";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* <DevUpdateScrollEffect /> */}

      <Container className="home-container" maxWidth="xl">
        <h1 className="title">
          Get organized, with <span className="fmly-title">fmly</span>!
        </h1>
        <h3 className="homepage-info-pitch">
          fmly makes family management much more efficient. Communicate, manage
          tasks, and always have peace of mind with location sharing, and much
          more, all in one platform.
        </h3>
        <br />
        <img className="wooden-hand-mockup" srcSet={WoodenHandMockup}></img>
       
          
            <div className="homepage-download-info-text">
              <div className="info-text-1">Interested in trying out fmly? </div>
              <br /> Then join the waitlist and be one of the first to use fmly
              once it is released!
            </div>
          <WaitlistSignupForm />
          {/* <Grid>
            <img className="QR-code" srcSet={QRCode} alt="QR Code" />{" "}
          </Grid> */}
          {/* <span className="QR-code-text"> (Scan to download) </span> */}
          
            <a href="">
              <img
                className="app-store-button"
                srcSet={AppStoreButton}
                alt="App Store Button"
              />
            </a>
            <a href="">
              <img
                className="play-store-button"  
                srcSet={PlayStoreButton}
                alt="Play Store Button"
              />
            </a>
      
        
        <hr className="homepage-hr-1" />
        <DashboardInfo />
        <hr className="homepage-hr-2" />
       
          <PremiumFeatures />
       <hr className="homepage-hr-2" />
        <Grid>
        
          <strong className="pricing-options-text">Pricing Options</strong>
        </Grid>
        <Grid container >
          <FreePricingModel />
          <PremiumPricingModel />
          {/* <SubscriptionPricingModel /> */}
        </Grid>
        <hr className="homepage-hr-3" />
      </Container>
    </>
  );
};

export default Home;
