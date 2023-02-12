import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { validateEmail } from "../FormValidationChecker";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

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
        (res) => {
          console.log(res);
        }
      );
    } else {
      alert(t("alert.invalidEmail"));
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          className="interest-signup-input"
          id="outlined-email-input"
          label={t("general.email")}
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "#21f3ce",
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: 17,
            height: 56,
            width: 240,
            bottom: 62,
            marginRight: 50,
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
