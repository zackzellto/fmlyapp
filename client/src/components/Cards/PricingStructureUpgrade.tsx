import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, Grid } from "@material-ui/core";
import "../../Styles/PricingStructureStyles.css";
import StarIconSVG from "../../assets/star-icon.svg";
import RainbowIconSVG from "../../assets/rainbow-icon.svg";
import GreenCheckmark from "../../assets/green-checkmark.svg";


const PremiumPricingModel = () => {
 
  return (
    <Card className="pricing-box-upgrade">
      <Typography
        className="pricing-box-title"
        sx={{
          fontFamily: "Paytone One, sans-serif",
          color: "#FFFFFF",
          fontSize: "2.5rem",
          fontWeight: "bold",
          padding: ".5rem",
          backgroundColor: "#F850F1",
          textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
        }}
      >
        Upgrade
      </Typography>
      <div className="pricing-box-text-upgrade">
          <ul>
            <li>
              <img srcSet={StarIconSVG} />              
            </li>
            <li>
              <img srcSet={RainbowIconSVG} />
            </li>
            <li>
              <img srcSet={GreenCheckmark} />
            </li>
          </ul>
          
      </div>
    </Card>
  );
};

export default PremiumPricingModel;
