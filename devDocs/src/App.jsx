import React from "react";
import AuthProvider from "./contexts/AuthContext";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "./App.css";

// SEMPRE CONFERIR O README.MD -------------------------

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
   
  );
};

export default App;
