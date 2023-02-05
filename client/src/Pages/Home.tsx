import { Typography } from "@material-ui/core";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import iPhoneMockup from "../components/Images/iPhoneMockup.png";
import "../Styles/HomeScreenStyles.css";
import QRCode from ".././assets/qrcode-download-app.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Container maxWidth="lg">
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
        <Container>
          <img
            className="iPhone-mockup"
            src={iPhoneMockup}
            alt="iPhone 14 Mockup"
          />
        </Container>
        <img className="QR-code" src={QRCode} alt="QR Code" />
      </Container>
    </>
  );
};

export default Home;
