import { AuthContext } from "../../contexts/AuthContext";
import React, { useContext } from "react";
import { DashboardContainer } from "./Style";
import dashLogo1 from "../../assets/dashLogo1.png";
import TechsList from "../../components/TechsList";
import Footer from "../../components/Footer";
import BtnDashboard from "../../components/BtnDashboard";

const Dashboard = () => {
  const { setSearch, filteredTechs } = useContext(AuthContext);

  return (
    <DashboardContainer>
      <nav className="navBar">
        <img className="dashLogo" title="Quack!" src={dashLogo1} alt="img" />
        <input
          className="form"
          placeholder="Procure uma tech"
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <BtnDashboard/>
        {/* <Link to="/" className="glowing-btn" title="Já vai?">
        <span className='glowing-txt'>S<span className='faulty-letter'>A</span>IR</span>
        </Link> */}
      </nav>
        <ul className="list">
          <TechsList />
        </ul>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;
