import { AuthContext } from "../../contexts/AuthContext.jsx";
import React from "react";
import { useContext, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style.js";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import ParticlesBackground from "../../components/InitialBackground/Particles.jsx";
import { ToastContainer } from "react-toastify";
import DevdocsLogo1 from "../../assets/DevdocsLogo1.png"

// SEMPRE CONFERIR O README.MD -------------------------------

const Home = () => {
  
  const {notify} =useContext(AuthContext)

  return (
    <HomeContainer>
      <ParticlesBackground id="particles" />
      <div className="box">
        <img className="devdocs" src={DevdocsLogo1} alt="img" />
        {/* <h1 className="logo">
          DevDOCS ...<p className="blink">|</p>
        </h1> */}
        <h2 className="welcome">Bem-vindo(a) ao DevDOCS!</h2>
        <p className="about">
          O DevDOCS nada mais é que uma central de documentações. Sim! Elas
          estão reunidas em um só lugar para facilitar a sua vida.
        </p>

        <div className="techs">
          <a href="https://pt-br.reactjs.org/docs/getting-started.html" className="reactIcon" target="_blank"  title="React JS">
            <FaReact size={40} />
          </a>
          <a href="https://git-scm.com/doc" className="gitIcon" target="_blank"  title="Git">
            <FaGitAlt size={40} />
          </a>
          <a href="https://nodejs.org/pt-br/docs/" className="nodeIcon" target="_blank"  title="Node Js">
            <FaNodeJs size={40} />
          </a>
          <a href="https://classic.yarnpkg.com/lang/en/docs/" className="yarnIcon" target="_blank"  title="Yarn">
            <FaYarn size={40} />
          </a>
          <a href="https://www.typescriptlang.org/docs/" className="tsIcon" target="_blank"  title="TypeScript">
            <SiTypescript size={40} />
          </a>
      </div>
      <Link to="/Dashboard" className="link"> 
        Iniciar
      </Link>
      </div>
      <footer className="foot"></footer>
    </HomeContainer>
  );
};

export default Home;
