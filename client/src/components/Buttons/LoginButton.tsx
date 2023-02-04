import React from "react";
import { Grid } from "@material-ui/core";
import { PrimaryButton } from "../Buttons/PrimaryButton";

type Props = {
  children: React.ReactNode;
  handleLogin: () => void;
};

export const LoginButton = (props: Props) => {
  return <PrimaryButton text="Login" />;
};
