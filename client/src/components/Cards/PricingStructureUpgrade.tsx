import Typography from "@mui/material/Typography";
import { Card } from "@material-ui/core";
import "../../Styles/PricingStructureStyles.css";
import StarIconSVG from "../../assets/star-icon.svg";
import RainbowIconSVG from "../../assets/rainbow-icon.svg";
import GreenCheckmark from "../../assets/green-checkmark.svg";


const PremiumPricingModel = () => {
 
  return (
    <Card className="pricing-box-premium">
      <div className="pricing-box-premium-bg">
      <div className="pricing-box-premium-title">
        Premium
      </div>
      

      
      </div>
      <div className="pricing-box-text-premium">
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

export default PremiumPricingModel;
