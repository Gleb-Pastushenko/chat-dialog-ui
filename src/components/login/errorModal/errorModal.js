import React from "react";
import { Modal, Box, Alert } from "@mui/material";

const style = {
  borderRadius: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #cccccc",
  boxShadow: 24,
  p: 4,
};

export const ErrorModal = ({ errorCode, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  let errorMessage;

  switch (errorCode) {
    case "auth/wrong-password": {
      errorMessage = "Wrong password!";
      break;
    }
    case "auth/user-not-found": {
      errorMessage = "User with such e-mail is not registered!";
      break;
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      </Modal>
    </div>
  );
};
