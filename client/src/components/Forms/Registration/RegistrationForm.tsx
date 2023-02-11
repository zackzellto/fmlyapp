import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@mui/material";
import axios from "axios";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import "../FormStyles.css";
import { Grid } from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import KeyboardDateInput from "@material-ui/pickers/_shared/KeyboardDateInput";

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

export const UserRegistrationForm = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8088/users", {
        profilePicture: profilePicture,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
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

  return (
    <div className="form-container">
      <h1 className="form-title">Create an account</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                error={firstNameError}
                id="outlined-error-helper-text"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameError(false);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={lastNameError}
                id="outlined-error-helper-text"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError(false);
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Birthday"
                format="MM/DD/YYYY"
                value={birthday}
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) =>
                  setBirthday(date ? date.toDate() : new Date())
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={emailError}
                id="outlined-error-helper-text"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                error={passwordError}
                id="outlined-error-helper-text"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={confirmPasswordError}
                id="outlined-error-helper-text"
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError(false);
                }}
              />
            </Grid>
          </Grid>
        </div>
      </form>
      <PrimaryButton
        text="Create Account"
        onClick={() => {
          if (firstName === "") {
            setFirstNameError(true);
          }
          if (lastName === "") {
            setLastNameError(true);
          }
          if (email === "") {
            setEmailError(true);
          }
          if (password === "") {
            setPasswordError(true);
          }
          if (confirmPassword === "") {
            setConfirmPasswordError(true);
          }
          if (
            firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            password !== "" &&
            confirmPassword !== ""
          ) {
            handleSubmit();
          }
        }}
      />
      <p className="form-text">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
