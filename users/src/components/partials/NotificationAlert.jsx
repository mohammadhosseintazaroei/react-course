import React, { useContext, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export default function NotificationAlert(props) {
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState({
    success: "",
  });
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  props.resetError(null)
  };
  useEffect(() => {
    setOpen(props.open);

  }, []);

  return (
    <>

      <Stack spacing={2} sx={{ width: "100%" }}>
        {console.log(props.message)}
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <MuiAlert
            onClose={handleClose}
            severity={props.severity}
            style
            sx={{ width: "100%" }}
            variant="filled"
          >
            {props.message}
          </MuiAlert>
        </Snackbar>
      </Stack>

    </>
  );
}
