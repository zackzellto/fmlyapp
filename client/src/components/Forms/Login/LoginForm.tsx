import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@mui/material";
import axios from "axios";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import "../FormStyles.css";
import { Grid } from "@material-ui/core";
import MainLogo from "../../Logos/MainLogo";
import { LoginButton } from "../../Buttons/LoginButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1.5),
      width: "25ch",
      //Change the outline color when the input is focused
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#10d8c0",

        //Change the color of the label when the input is focused
        "& .MuiInputLabel-outlined.Mui-focused": {
          color: "#10d8c0",
        },
      },
    },
  },
}));

export const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Validates an email address.
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:8088/Users", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handles the change of an email address w/ validation & error handling.
  const handleEmailChange = async (e: any) => {
    setEmail(e.target.value);
    await axios
      .get("http://localhost:8088/Users" + e.target.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmailError(!validateEmail(e.target.value));
  };

  // Handles the change of a password w/ validation & error handling.
  const handlePasswordChange = async (e: any) => {
    setPassword(e.target.value);
    await axios
      .get("http://localhost:8088/Users" + e.target.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPasswordError(e.target.value.length < 8);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <MainLogo />
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            InputLabelProps={{
              style: {
                color: "#10d8c0",
                fontSize: 14,
                fontWeight: "500",
              },
            }}
            id="email"
            label="Email"
            type="email"
            size="small"
            variant="outlined"
            onChange={handleEmailChange}
            value={email}
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
            required
          />
        </div>

        <div>
          <TextField
            InputLabelProps={{
              style: {
                color: "#10d8c0",
                fontSize: 14,
                fontWeight: "500",
              },
            }}
            id="password"
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            value={password}
            error={passwordError}
            helperText={
              passwordError ? "Password must be at least 8 characters long" : ""
            }
            required
          />
        </div>
      </form>
      <Link className="forgot-pw-link" to="/forgot-password">
        <h5 style={{ textDecorationColor: "#21F3CE" }}> Forgot Password?</h5>
      </Link>

      <h5 className="need-an-account-question">Need an account?</h5>
      <Link className="register-account-link" to="/register">
        <h5> Register</h5>
      </Link>

      {/* <FacebookLoginButton /> */}
      <LoginButton handleLogin={handleLogin}>Login</LoginButton>
    </Grid>
  );
};
