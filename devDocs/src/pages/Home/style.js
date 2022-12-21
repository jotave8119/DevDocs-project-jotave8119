import styled from "styled-components";



export const HomeContainer = styled.section`


    width: 100vw;
    height: 100vh;
    background-color: var(--Grey-3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    scroll-behavior: smooth;

   .box{
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        flex-direction: column;
        justify-content: space-evenly;
        animation: fadeInDown 1s;
        text-align: center;

        .logo{
          font-weight: bold;
          color: var(--Grey-0);
          display: flex;
          flex-direction: row;
          margin-top: 100px;
          
          /* white-space: nowrap;
          overflow: hidden;
          animation: typewriter 2s steps(12) infinite alternate,
            blink 800ms steps(12) infinite normal;
          border-right: 5px solid white; */

          .blink{
            font-weight: 500;
            color: var(--Grey-0);
            animation: flash 1s linear infinite;
            margin-bottom: 10px;
          }
        }

        .welcome{
            font-size: 20px;
            color: var(--Grey-0);
            margin-top: 20px;
        }

        .about{
            font-size: 1rem;
            text-align: center;
            justify-self: center;
            color: var(--Grey-0);
            margin-top: 30px;
            width: 80%;
        }

      .dev{
          height: 200px;
          width: 300px;
          margin-top: 20px;
          margin-bottom: 10px;
          animation: shakeY 5s linear infinite;
      } 
   }

   .link{
        width: 200px;
        height: 40px;
        padding: 5px;
        margin-top: 40px;
        margin-bottom: 30px;
        border: solid 1px white;
        border-radius: 8px;
        color: var(--Grey-0);
        background-color: transparent;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        animation: fadeInDown 1s;

        &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px #F8F9FA;
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
        }
      }

      .someTechs{
            text-align: center;
            margin-top: 35px;
            margin-bottom: 5px;
        }

      .techs{
        width: 300px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 45px;
        animation: fadeInDown 1s;
        text-align: center;

        

        .reactIcon{
            cursor: pointer;
            padding: 2px;
            background-color: transparent;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #61DAFB;
            color: #61DAFB;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .gitIcon{
            cursor: pointer;
            padding: 2px;
            background-color: transparent;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #EF391A;
            color: #EF391A;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .nodeIcon{
            cursor: pointer;
            padding: 2px;
            background-color: transparent;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #237A1F;
            color: #237A1F;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }

        .yarnIcon{
            cursor: pointer;
            padding: 2px;
            background-color: transparent;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #117CAD;
            color: #117CAD;
            transform: translateY(-10px);
            transition: 0.5s;
        }
        }

        .tsIcon{
            cursor: pointer;
            padding: 2px;
            background-color: transparent;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px #3178C6;
            color: #3178C6;
            transform: translateY(-10px);
            transition: 0.5s;
        }
    }
}
// KEYFRAMES
/* @keyframes typewriter {
        from {
          width: 0%;
        }
        to {
          width: 80%;
        }
      }
      @keyframes blink {
        from {
          border-color: white;
        }
        to {
          border-color: transparent;
        }
      } */

//MEDIA QUERY ---- -- - -- - - -- -- 

@media(min-width: 768px){

    .box{
        height: 600px;
    }
    .logo{
        font-size: 60px;
        margin-top: 30px;
    }

    .dev{
        width: 400px;
        height: 450px;
    }

    .techs{
        width: 600px;
        gap: 20px;
    }


}



`;

