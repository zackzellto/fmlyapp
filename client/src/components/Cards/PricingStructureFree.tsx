import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, Grid } from "@material-ui/core";
import "../../Styles/PricingStructureStyles.css";

const FreePricingModel = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Card className="pricing-box-free">
      <Typography
        className="pricing-box-title"
        sx={{
          fontFamily: "Paytone One, sans-serif",
          color: "#FFFFFF",
          fontSize: "2.5rem",
          fontWeight: "bold",
          padding: ".5rem",
          backgroundColor: "#21f3ce",
          textShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
        }}
      >
        Free
      </Typography>
      <div className="pricing-box-text-free">
        
      </div>
    </Card>
  );
};

export default FreePricingModel;
