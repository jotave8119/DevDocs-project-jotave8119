import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.js";
import { HomeContainer } from "./style.js";

const Home = () => {
  const container = useRef();

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
        <h1>DevDOCS</h1>
        <div ref={container} className="dev"></div>
      <Link to="/Dashboard">ir até dash</Link>
      </div>
    </HomeContainer>
  );
};

export default Home;
