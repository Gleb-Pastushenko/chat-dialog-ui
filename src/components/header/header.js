import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";

import "./header.css";

export const Header = () => {
  const { isLogged, auth, disableListener } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    console.log("handleLogoutClick");
    disableListener();
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {});
  };

  return (
    <header className="header">
      <h1 className="header__title">SPDU</h1>
      {isLogged ? (
        <IconButton
          sx={{
            backgroundColor: "rgba(0,0,0,0.45)",
            width: "56px",
            boxShadow: "0 0 7px 2px white",
          }}
          onClick={handleLogoutClick}
        >
          <LogoutIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      ) : null}
    </header>
  );
};
