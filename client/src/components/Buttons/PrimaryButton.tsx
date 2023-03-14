import { Button } from "@mui/material";

type Props = {
  text: string;
  onSubmit?: () => void;
  onClick?: () => void;
};

export const PrimaryButton = (props: Props) => {
  return (
    <Button
      className="primary-button"
      variant="contained"
      
    >
      {props.text}
    </Button>
  );
};
