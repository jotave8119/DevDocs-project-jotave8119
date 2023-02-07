import styled from "styled-components";



export const HomeContainer = styled.section`


    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;

   .box{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        margin-top: 50px;
        margin-bottom: 15px;
        animation: fadeIn 1s;
        text-align: center;

        .devdocs{
          width: 400px;
          height: 400px;
          padding: 0;
          margin: 0;
        }

        /* .logo{
          font-weight: bold;
          font-size: 40px;
          color: var(--Grey-0);
          display: flex;
          flex-direction: row;
          margin-top: 50px;
          background-color:#2a2a2dbb;
          border-radius: 5px;
          padding: 5px;
          
          
          
          white-space: nowrap;
          overflow: hidden;
          animation: typewriter 2s steps(12) infinite alternate,
            blink 800ms steps(12) infinite normal;
          border-right: 5px solid white;

          .blink{
            font-weight: 500;
            color: var(--Grey-0);
            animation: flash 1s linear infinite;
            margin-bottom: 10px;
          }
        } */

        .welcome{
            font-size: 35px;
            line-break: auto;
            font-weight: bold;
            color: white;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .about{
            font-size: 1rem;
            text-align: center;
            font-weight: bold;
            justify-self: center;
            color: var(--Grey-0);
            margin-top: 3px;
            width: 80%;
        }

   }


      .techs{
        width: 300px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 15px;
        animation: fadeInUp 1s;
        text-align: center;

        

        .reactIcon{
            cursor: pointer;
            padding: 2px;
            color: var(--Grey-0);
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #61DAFB;
            color: #61DAFB;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .gitIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #EF391A;
            color: #EF391A;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .nodeIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #237A1F;
            color: #237A1F;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .yarnIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #117CAD;
            color: #117CAD;
            transform: translateY(-10px);
            transition: 0.5s;
        }
        }

        .tsIcon{
            cursor: pointer;
            color: var(--Grey-0);
            padding: 2px;
            background-color: transparent;
            animation: fadeIn 1s;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #3178C6;
            color: #3178C6;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

    .foot{
      width: 100%;
      height: 100px;
      margin-top: 50px;
    }
}

.glowing-btn{

position: relative;
color: var(--Grey-0);
cursor: pointer;
padding: 0.35em 1em;
border: 0.15em solid var(--Grey-0);
border-radius: 0.45em;
background: none;
perspective: 1em;
font-size: 1em;
font-weight: 900;
letter-spacing: 1em;
margin-top: 5px;

-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
    0px 0px 0.5em 0px var(--Color-primary);
-moz-box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
    0px 0px 0.5em 0px var(--Color-primary);
box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
    0px 0px 0.5em 0px var(--Color-primary);
animation: border-flicker 2s linear infinite;


.glowing-txt {
float: left;
margin-right: -0.8em;
-webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--Color-primary);
-moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--Color-primary);
text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--Color-primary);
animation: text-flicker 3s linear infinite;
}

.faulty-letter {
opacity: 0.5;
animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: var(--Color-primary);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: var(--Color-primary);
  box-shadow: 0 0 2em 0.2em var(--Color-primary);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: var(--Grey-0);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
} 
}

// KEYFRAMES ---------------

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

//MEDIA QUERY ---- -- - -- - - -- -- 

@media(min-width:768px){

    .box{
      gap: 20px;
    }
  
    .logo{
        font-size: 60px;
    }

    .devdocs{
        width: 400px;
        height: 400px;
        padding: 0;
    }

    .techs{
        width: 600px;
        gap: 20px;
        margin-top: 15px;
    }


}



`;

