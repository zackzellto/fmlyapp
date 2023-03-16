import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import { validateEmail } from "../FormValidationChecker";
import "./WaitlistSignup.css";


export const WaitlistSignupForm = () => {

  const [email, setEmail] = useState("");

  const checkEmail = () => {
    if (validateEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
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
    <>
      <form noValidate autoComplete="off">
        <div>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <div className="wl-spacer"></div>
              <TextField
              style={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)" }}
                className="wl-input"
                id="outlined-email-input"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="wl-spacer"></div>
              <Button
              style={{ 
              backgroundColor: "#83F3DF", 
              color: "black", 
              fontWeight: "bold", 
              fontSize: "16px", 
              fontFamily: "Poppins, sans-serif",
              borderRadius: "10px", 
              padding: "10px 20px", 
              cursor: "pointer",
              border: "1px solid #83F3DF",
              boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
              transition: "all 0.2s ease-in-out",
               }}
                className="wl-button"  
                onClick={handleSubmit}
              >
                Join Waitlist!
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};
