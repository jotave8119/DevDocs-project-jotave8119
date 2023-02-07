import styled from "styled-components";

export const DashboardContainer = styled.main`

*{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Nunito', sans-serif;
}

    width: 100vw;
    height: 100vh;
    background-color: var(--Grey-3);
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;

    .navBar{
        width: 100%;
        height: 100px;
        padding: 20px;
        display: flex;
        background-color: var(--Grey-4);
        justify-content: space-around;
        gap: 10px;
        align-items: center;
        border-bottom: solid 3px var(--Color-primary);
        top: 0;
        left: 0;
        position: sticky;
        z-index: 10;
        animation: fadeInDown 0.5s;

        .dashLogo{
            width: 60px;
            height: 60px;
            animation: fadeIn 1s;
            /* border: solid 2px var(--Color-primary);
            border-radius: 50%; */
            transition: all 1s;

            &:hover{
                -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
            }
        }

        .form{
            height: 40px;
            color: var(--Grey-0);
            border-radius: 5px;
            border: solid 2px var(--Color-primary);
            padding: 5px;
            width: 130px;
}

        .title{
            font-size: 25px;
            display: flex;
            flex-direction: row;

            .blink{
            font-weight: 500;
            color: var(--Grey-0);
            animation: flash 1s linear infinite;
            margin-bottom: 10px;
          }
        }

        .glowing-btn{

        position: relative;
        color: var(--Color-primary);
        cursor: pointer;
        padding: 0.35em 1em;
        border: 0.15em solid var(--Color-primary);
        border-radius: 0.45em;
        background: none;
        perspective: 1em;
        font-size: 1em;
        font-weight: 900;
        letter-spacing: 0.5em;

        -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
            0px 0px 0.5em 0px var(--Color-primary);
        -moz-box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
            0px 0px 0.5em 0px var(--Color-primary);
        box-shadow: inset 0px 0px 0.5em 0px var(--Color-primary),
            0px 0px 0.5em 0px var(--Color-primary);
        animation: border-flicker 2s linear infinite;
        box


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

        .list{
            width: 90%;
            height: 80%;
            
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--Grey-3);
            flex-direction: column;
            margin-bottom: 40px;
            animation: fadeInLeft 0.5s;
            
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

// @MEDIA - BREAKPOINT -----------

    @media(min-width: 768px){
        .list{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            width: 85%;
        }

        nav{
            display: flex;
            justify-content: space-evenly;
        }
        
        input{
           width: 200px;
           
       }
    } 
`;