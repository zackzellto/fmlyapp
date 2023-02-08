import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import iPhoneMockup from "../components/Images/iPhoneMockup.png";
import "../Styles/HomeScreenStyles.css";
import QRCode from ".././assets/qrcode-download-app.svg";
import AppStoreButton from ".././assets/ios-download-button.svg";
import PlayStoreButton from ".././assets/android-download-button.svg";
import styled from "styled-components";
import FreePricingModel from "../components/Cards/PricingStructureFree";
import PremiumPricingModel from "../components/Cards/PricingStructureUpgrade";
import SubscriptionPricingModel from "../components/Cards/PricingStructureSubscribe";

type Props = {};

const DemoButton = styled.button`
  background: #21f3ce;
  border-radius: 2.5px;
  border: none;
  color: #000000;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 17px;
  height: 56px;
  width: 250px;
  position: relative;
  text-transform: none;
  z-index: 1;
  &:hover {
    background: #10d8c0;
    color: #000000;
  }
  &:active {
    background: #10d8c0;
    color: #000000;
  }
`;

const Home = (props: Props) => {
  return (
    <>
      <Container className="home-container" maxWidth="xl">
        {" "}
        <h1 className="title">
          Get organized with <text className="fmly-title">fmly</text>!
        </h1>
        <h3 className="homepage-info-pitch">
          fmly makes family management much more efficient. Communicate, manage
          tasks, and always have peace of mind with location sharing, and much
          more, all in one platform.
        </h3>
        <br />
        <img className="iPhone-mockup" srcSet={iPhoneMockup} alt="iPhone" />
        <h5 className="dev-update-text">
          We're currently in development, but you can join our waitlist to be
          notified when we launch!
        </h5>
        <Grid
          sx={{
            marginTop: "250px",
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="interest-signup-input"
            label="Enter email"
          />
          <DemoButton disabled className="demo-button">
            Join Waitlist!
          </DemoButton>
          <Grid>
            <text className="homepage-download-info-text">
              When we launch, we'll send you an email with a link to download,
              or just come back here and check!
            </text>
          </Grid>
          <Grid>
            <img className="QR-code" srcSet={QRCode} alt="QR Code" />{" "}
          </Grid>
          <text className="QR-code-text"> (Scan to download) </text>
          <Grid>
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
          </Grid>
        </Grid>
        <hr className="homepage-hr" />
        <Grid>
          <strong className="pricing-options-text">Pricing Options</strong>
        </Grid>
        <Grid container spacing={6}>
          <FreePricingModel />
          <PremiumPricingModel />
          <SubscriptionPricingModel />
        </Grid>
        <hr className="homepage-hr" />
      </Container>
    </>
  );
};

export default Home;
