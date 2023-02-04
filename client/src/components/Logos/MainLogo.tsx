import react from "react";
import { Grid, styled } from "@material-ui/core";

const MainLogoStyle = styled("h1")({
  fontSize: "80px",
  fontWeight: "bold",
  color: "#21F3CE",
  fontFamily: "Paytone One, sans-serif",
  textAlign: "center",
  padding: "10px",
  margin: "10px",
  marginBottom: "30px",
  borderRadius: "10px",
  backgroundColor: "white",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  zIndex: 1,
});

const MainLogo = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <MainLogoStyle>fmly</MainLogoStyle>
    </Grid>
  );
};

export default MainLogo;
