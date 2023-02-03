import React from "react";
import { useContext, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { AuthContext } from "../../contexts/AuthContext";
import { ListContainer } from "./Style";

const TechsList = () => {
  const { techs, setTechs, filteredTechs, isLoading, setIsLoading } =
    useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return isLoading ? (
    <PuffLoader
      color="#a016c7"
      isLoading={isLoading}
      size={250}
      cssOverride={override}
    />
  ) : (
    <ListContainer>
      {filteredTechs.map((tech) => (
        <li key={tech.id}>
          <div className="imgBox">
            <img className="techImg" src={tech.image} alt="img" />
          </div>
          <div className="info">
            <h4 className="techName">Nome: {tech.name}</h4>
            <span className="techArea">área: {tech.area} </span>
          </div>
          <div className="docBtn">
            <a
              className="documentation"
              href={tech.doc}
              target="_blank"
              title="Ver Doc"
            >
              Ver Doc
            </a>
          </div>
        </li>
      ))}
    </ListContainer>
  );
};

export default TechsList;
