import AppBar from "@mui/material/AppBar";
import DevUpdateScrollEffect from "./DevUpdateScrollEffect";

function AppBarWeb() {
  return (
    <AppBar
      className="app-bar-web"
      position="static"
      sx={{
        background: "#21F3CE",
        color: "#000000",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        zIndex: 0,
      }}
    ></AppBar>
  );
}
export default AppBarWeb;
