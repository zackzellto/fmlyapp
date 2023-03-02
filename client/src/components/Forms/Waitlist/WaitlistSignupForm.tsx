import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { validateEmail } from "../FormValidationChecker";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const WaitlistSignupForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const checkEmail = () => {
    if (validateEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e: any) => {
    if (checkEmail()) {
      e.preventDefault();
      await Axios.post("http://localhost:8088/WaitlistSignup", { email }).then(
        (response) => {
          console.log(response);
        }
      );
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          className="interest-signup-input"
          id="outlined-email-input"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "#83F3DF",
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: 17,
            height: 56,
            width: 250,
            maxWidth: 320,
            bottom: 220,
            position: "relative",
            textTransform: "none",
            zIndex: 1,
          }}
          className="demo-button"
          onClick={handleSubmit}
        >
          Join Waitlist!
        </Button>
      </div>
    </form>
  );
};
