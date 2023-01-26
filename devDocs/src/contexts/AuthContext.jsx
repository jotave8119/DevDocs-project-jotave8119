import React from "react";
import { createContext } from "react";
import {toast} from "react-toastify";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const notify = (message, type) => {
        const config = {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        };
        if (type === "warn") {
          return toast.warn(message, config);
        }
        if (type === "success") {
          return toast.success(message, config);
        }
        if (type === "info") {
          return toast.info(message, config);
        } else {
          return toast.error(message, config);
        }
      };

      return(
        <AuthContext.Provider value={{notify}}>
            {children}
        </AuthContext.Provider>
      )
};

export default AuthProvider;