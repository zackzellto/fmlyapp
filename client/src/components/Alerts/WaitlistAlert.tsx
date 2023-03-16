import React, { useState, useEffect } from "react";
import "./WaitlistAlertStyles.css";

interface AlertProps {
  isSuccess: boolean;
  onClose: () => void;
}

const Alert = ({ isSuccess, onClose }: AlertProps): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true);
  const message = isSuccess
    ? "Thanks for joining the waitlist!"
    : "Whoops, that didn't work, try again?";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  const alertClass = isSuccess ? "alert-success" : "alert-failure";

  return (
    <div className={`alert ${alertClass} ${visible ? "slide-in" : "slide-out"}`}>
      {message}
    </div>
  );
};

export default Alert;
