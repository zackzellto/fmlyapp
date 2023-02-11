import {
  FormControl,
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
import AppBarWeb from "../components/AppBar/WebAppBar";
import DevUpdateScrollEffect from "../components/AppBar/DevUpdateScrollEffect";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { WaitlistSignupForm } from "../components/Forms/Waitlist/WaitlistSignupForm";

type Props = {};

const WaitlistButton = styled.button`
  background: #21f3ce;
  border-radius: 5px;
  border: none;
  color: #000000;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 17px;
  height: 56px;
  width: 240px;
  bottom: 70px;
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

type FormData = {
  email: string;
};

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
        <img className="iPhone-mockup" srcSet={iPhoneMockup} alt="iPhone" />
        <Grid
          sx={{
            marginTop: "250px",
          }}
        >
          <WaitlistSignupForm />
          <Grid>
            <span className="homepage-download-info-text">
              When we launch, we'll send you an email with a link to download,
              or just come back here and check!
            </span>
          </Grid>
          <Grid>
            <img className="QR-code" srcSet={QRCode} alt="QR Code" />{" "}
          </Grid>
          <span className="QR-code-text"> (Scan to download) </span>
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
