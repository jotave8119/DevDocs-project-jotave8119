import { AuthContext } from "../../contexts/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {FaYarn} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import {BsGithub} from "react-icons/bs";
import {SiFirebase} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {FaDribbbleSquare} from "react-icons/fa";
import {SiStyledcomponents} from "react-icons/si";
import {FaCss3Alt} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {SiNestjs} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiVite} from "react-icons/si";
// import {IoLogoVue} from "react-icons/io";
// import {IoLogoVercel} from "react-icons/io";
import {SiFramer} from "react-icons/si";
import {SiVisualstudio} from "react-icons/si";
import {SiNpm} from "react-icons/si";
import {SiPostgresql} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiAmazonaws} from "react-icons/si";
import {SiPython} from "react-icons/si";
import {SiDocker} from "react-icons/si";
import { DashboardContainer } from "./Style";
import { ToastContainer } from "react-toastify";

import dashLogo1 from "../../assets/dashLogo1.png"


// SEMPRE CONFERIR O README.MD ------------------------------------

const Dashboard = () => {
    const {notify} = useContext(AuthContext);
    
    // const container             = useRef(null);

    // useEffect(()=>{

    //     Lottie.loadAnimation({
    //         container: container.current,
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         path: "https://assets1.lottiefiles.com/packages/lf20_HIvXrr.json",
    //       });

    //       return () => Lottie.destroy();

    // }, []);

    return(
        <>
       
       
        {/* <div ref={container} className="load"></div>  */}
         
        <DashboardContainer>

            <nav className="navBar">
                <img className="dashLogo" src={dashLogo1} alt="img" />
                {/* <h1 className="title">DevDocs...
                <p className="blink">|</p>
                </h1> */}
                <Link to="/" className="logout">Sair</Link>
            </nav>
            <ToastContainer
                 toastStyle={{ backgroundColor: 'black', color: 'white' }}
            />
        </DashboardContainer>
           
        {/* tecnologias:
        REACT JS
        REACT NATIVE
        TYPESCRIPT
        NODE
        YARN
        BOOTSTRAP
        MUI
        CHAKRA UI
        TAILWIND
        GIT
        GITHUB
        FIREBASE
        NEXT JS
        ANIMATE CSS -não tem no react icons
        DRIBBLE
        REACT-ICONS
        REACT-ROUTER-DOM
        STYLED COMPONENTS
        CSS-MDN
        JS-MDN
        HTML-MDN
        NEST
        AXIOS - naó tem no react icons
        TOASTIFY - não tem no react icons
        ANGULAR
        VUE
        VITE
        VERCEL
        LOTTIE FILES - não tem no react icons
        FRAMER MOTION
        VSCODE
        NPM
        express - não tem no react icons
        typeorm - não tem no react icons
        postgres
        mongo
        mysql
        dbeaver- não tem no react icons
        aws
        python
        docker
        java
        c
        c#
        c++
        kotlin
        flutter
        ruby
        php
        swift
        go
         */}

        </>
    )
}

export default Dashboard;