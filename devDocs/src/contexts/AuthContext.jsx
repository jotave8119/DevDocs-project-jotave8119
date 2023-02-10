import React from "react";
import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

  const [techs, setTechs]             = useState([]);
  const [search, setSearch]           = useState("");
  const [isLoading, setIsLoading]     = useState(true);
  const container                     = useRef(null);

  useEffect(() => {
      api.get("techs")
         .then(resp => setTechs(resp.data))
         .catch(err => console.log(err))
  }, []);


  const filteredTechs = techs.filter(techs => 
    search === '' ? true : techs.name.toLowerCase().includes(search.toLowerCase()) ||
    search === '' ? true : techs.area.toLowerCase().includes(search.toLowerCase())
  );


  const override = {
    display: "block",
    margin: "0 auto",
  };

      return(
        <AuthContext.Provider 
        value={{techs, setTechs, search,
                setSearch, filteredTechs, isLoading, 
                setIsLoading, override, container
              }}>
            {children}
        </AuthContext.Provider>
      )
};

export default AuthProvider;