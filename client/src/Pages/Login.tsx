import React from "react";
import { LoginForm } from "../components/Forms/Login/LoginForm";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <LoginForm />
      </Grid>
    </div>
  );
};

export default Login;
