import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import iPhoneMockup from "../components/Images/iPhoneMockup.png";
import "../Styles/HomeScreenStyles.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Grid container xs={12}>
        <Box>
          <h1 className="title">
            Get organized with <span className="fmly-title">fmly</span>!
          </h1>
          <br />
        </Box>
        <Box>
          <p className="homepage-info-pitch">
            Our app makes family management much more efficient. Communicate,
            manage tasks, and always have peace of mind with location sharing,
            all in one platform.
          </p>
          <br />
        </Box>
        <Box>
          <p className="homepage-download-info-text">
            Download now and experience stress-free household coordination.
          </p>
        </Box>
        <PrimaryButton text={"Try a Demo."} />
        <Container maxWidth="md">
          <img
            className="iPhone-mockup"
            src={iPhoneMockup}
            alt="iPhone 14 Mockup"
          />
        </Container>
      </Grid>
    </>
  );
};

export default Home;
