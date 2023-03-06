import * as React from "react";
import Typography from "@mui/material/Typography";
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
      <div className="pricing-box-free-bg">
      <div className="pricing-box-free-title">
        Free
      </div>
      

      
      </div>
      <div className="pricing-box-text-free">
        <div className="included-features" >Included Features</div>
        <ul>
          <li>Calendar</li>
          <li>dinnertime!</li>
          <li>fmlychat</li>
          <li>Groceries</li>
          <li>To-Do List</li>
        </ul>
      </div>

    </Card>
  );
};

export default FreePricingModel;
