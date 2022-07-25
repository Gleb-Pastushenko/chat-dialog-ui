import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

export default function SignupModal({ open, setOpen, submitFunc }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pwdVisible, setPwdVisible] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(true);
  const [pwdValid, setPwdValid] = React.useState(true);

  const emailRegex = /^\w+(?:[.-]?\w+)*@\w+(?:[.-]?\w+)*(\.\w{2,3})+$/;

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
    setEmailValid(emailRegex.test(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
    setPwdValid(passwordRegex.test(e.currentTarget.value));
  };

  const handleSubmitClick = (e) => {
    submitFunc(email, password);
    handleClose();
  };

  const toggleVisibility = () => {
    setPwdVisible(!pwdVisible);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={3}>
            <TextField
              variant="filled"
              label="Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={email !== "" && !emailValid}
              helperText={
                email !== "" && !emailValid ? "Incorrect email" : undefined
              }
            />
            <TextField
              variant="filled"
              label="Password"
              fullWidth
              value={password}
              type={pwdVisible ? "text" : "password"}
              onChange={handlePasswordChange}
              error={password !== "" && !pwdValid}
              helperText={
                password !== "" && !pwdValid
                  ? "Password is not secure"
                  : undefined
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleVisibility}>
                      {pwdVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              fullWidth
              onClick={handleSubmitClick}
              disabled={
                !(email !== "" && password !== "" && emailValid && pwdValid)
              }
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
