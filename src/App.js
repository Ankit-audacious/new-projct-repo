import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Style/Home";
import Login from "./Style/Login";
import NavBar from "./Style/NavBar";
import SignUp from "./Style/SignUp";
import ForgotPassword from "./Style/ForgotPassword";
import NewPassword from "./Style/NewPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "NewPassword",
    element: <NewPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
