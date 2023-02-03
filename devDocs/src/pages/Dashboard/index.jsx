import { AuthContext } from "../../contexts/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DashboardContainer } from "./Style";
import dashLogo1 from "../../assets/dashLogo1.png";
import TechsList from "../../components/TechsList";
import Footer from "../../components/Footer";


const Dashboard = () => {
  const {setSearch} = useContext(AuthContext);

  return (
      <DashboardContainer>
        <nav className="navBar">
          <img className="dashLogo" src={dashLogo1} alt="img" />
          <input
            className="form"
            placeholder="Procure uma tech"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <Link to="/" className="logout">
            Sair
          </Link>
        </nav>
        <ul className="list">
          <TechsList />
        </ul>
        <Footer />
      </DashboardContainer>
  );
};

export default Dashboard;
