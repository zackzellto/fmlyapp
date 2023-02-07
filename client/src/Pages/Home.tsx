import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
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
        <Grid>
          <h1 className="title">
            Get organized with <span className="fmly-title">fmly</span>!
          </h1>
          <br />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          fontSize={20}
          sx={{
            fontFamily: "Poppins, sans-serif",
            width: "90%",
            fontSize: "20px",
          }}
        >
          <Typography className="homepage-info-pitch">
            <h3>
              Our app makes family management much more efficient. Communicate,
              manage tasks, and always have peace of mind with location sharing,
              and much more, all in one platform.
            </h3>
          </Typography>
          <br />
        </Grid>
        <DemoButton className="demo-button">Try our Demo</DemoButton>
        <Grid>
          <img className="iPhone-mockup" srcSet={iPhoneMockup} alt="iPhone" />
          <Typography className="homepage-download-info-text">
            <strong>
              Download now and experience stress-free household coordination!
            </strong>
          </Typography>
        </Grid>
        <img className="QR-code" srcSet={QRCode} alt="QR Code" />

        <Typography className="QR-code-text"> (Scan to download) </Typography>
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
