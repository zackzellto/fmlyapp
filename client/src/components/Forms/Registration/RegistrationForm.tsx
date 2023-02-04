import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { TextField } from "@material-ui/core";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import axios from "axios";
import {
  validateEmail,
  validatePassword,
} from "../../Authentication/Validations";

type Props = {};

const RegistrationForm = () => {
  const registerUser = () => {
    axios
      .post("http:/localhost:8088/user", {
        firstName: "test",
        lastName: "test",
        email: "test@test.com",
        password: "test",
      })
      .then((res) => {
        if (
          validateEmail(res.data.email) &&
          validatePassword(res.data.password)
        ) {
          res.data.save();
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("registering user");
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <TextField label="First Name" />

        <TextField label="Last Name" />

        <TextField label="Email" />

        <TextField label="Password" />

        <TextField label="Confirm Password" />
      </Grid>
      <Grid xs={6}>
        <PrimaryButton onSubmit={registerUser} text="Register" />
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
