import { Navigate } from "react-router-dom";
import { Login } from "./components/login/login";
import { Chat } from "./components/chat/chat";

const routes = {
  noMatchRoute: {
    path: "*",
    component: <Navigate to="/" />,
  },
  rootPublic: {
    path: "/",
    component: <Navigate to="/login" />,
  },
  rootPrivate: {
    path: "/",
    component: <Navigate to="/chat" />,
  },
  login: {
    path: "/login",
    component: <Login />,
  },
  chat: {
    path: "/chat",
    component: <Chat />,
  },
};

export const PUBLIC_ROUTES = [
  routes.rootPublic,
  routes.login,
  routes.noMatchRoute,
];
export const PRIVATE_ROUTES = [
  routes.rootPrivate,
  routes.chat,
  routes.noMatchRoute,
];
