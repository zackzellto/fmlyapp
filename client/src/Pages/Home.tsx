import { Typography } from "@material-ui/core";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import iPhoneMockup from "../components/Images/iPhoneMockup.png";
import "../Styles/HomeScreenStyles.css";
import QRCode from ".././assets/qrcode-download-app.svg";
import AppStoreButton from ".././assets/ios-download-button.svg";
import PlayStoreButton from ".././assets/android-download-button.svg";

type Props = {};

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
        <Grid>
          <Typography className="homepage-info-pitch">
            Our app makes family management much more efficient. Communicate,
            manage tasks, and always have peace of mind with location sharing,
            all in one platform.
          </Typography>
          <br />
        </Grid>
        <Grid>
          <Typography className="homepage-download-info-text">
            Download now and experience stress-free household coordination.
          </Typography>
        </Grid>
        <PrimaryButton text={"Try a Demo."} />
        <img className="QR-code" srcSet={QRCode} alt="QR Code" />
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
      </Container>
    </>
  );
};

export default Home;
