import { Button } from "@mui/material";

type Props = {
  text: string;
  onSubmit?: () => void;
};

export const PrimaryButton = (props: Props) => {
  return (
    <Button
      className="primary-button"
      variant="contained"
      sx={{
        borderRadius: 2.5,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
        fontSize: 17,
        width: "250px",
        background: "#21F3CE",
        color: "#000000",
        height: "56px",
        position: "relative",
        top: "221px",
        textTransform: "none",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        zIndex: 1,
        "&:hover": {
          background: "#10d8c0",
          color: "#000000",
        },

        "&:active": {
          background: "#10d8c0",
          color: "#000000",
        },

        "&:focus": {
          background: "#10d8c0",
          color: "#000000",
        },
      }}
    >
      {props.text}
    </Button>
  );
};
