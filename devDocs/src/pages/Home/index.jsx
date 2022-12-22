import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style.js";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {FaYarn} from "react-icons/fa";

// SEMPRE CONFERIR O README.MD -------------------------------

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets6.lottiefiles.com/packages/lf20_kyu7xb1v.json",
    });
    return () => Lottie.destroy();
  }, []);

  return (
    <HomeContainer>

      <div className="box">
        <h1 className="logo">DevDOCS ...<p className="blink">|</p></h1>
        <h2 className="welcome">Bem-vindo(a) ao DevDOCS!</h2>
        <p className="about">O DevDOCS nada mais é que uma central de documentações. 
          Sim! Elas estão reunidas em um só lugar para facilitar a sua vida.
        </p>
        <div ref={container} className="dev"></div>
      </div>

      <div className="techs">
        <span className="reactIcon" title="React JS"><FaReact size={40}/></span>
        <span className="gitIcon"   title="Git"><FaGitAlt size={40}/></span>
        <span className="nodeIcon"  title="Node Js"><FaNodeJs size={40}/></span>
        <span className="yarnIcon"  title="Yarn"><FaYarn size={40}/></span>
        <span className="tsIcon"    title="TypeScript"><SiTypescript size={40}/></span>
      </div>

      <Link to="/Dashboard" className="link">Iniciar</Link>

    </HomeContainer>
  );
};

export default Home;
