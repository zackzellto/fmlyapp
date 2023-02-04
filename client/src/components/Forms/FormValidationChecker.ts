import { useState } from "react";
import axios from "axios";

// Validates an email address.
export const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
    };

export const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
};

  // Handles the change of an email address w/ validation & error handling.
export const handleEmailChange = async (e: any) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    setEmail(e.target.value);
    await axios
      .get("http://localhost:5000/api/users/email/" + e.target.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmailError(!validateEmail(e.target.value));
  };

  // Handles the change of a password w/ validation & error handling.
export const handlePasswordChange = async (e: any) => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    setPassword(e.target.value);
    await axios
      .get("http://localhost:5000/api/users/password/" + e.target.value)
      .then((res) => {
        if(res.data.length > 0) {
          console.log("Password already exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setPasswordError(e.target.value.length < 8);
  };