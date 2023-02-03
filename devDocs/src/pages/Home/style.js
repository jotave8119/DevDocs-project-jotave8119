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
          padding: 0;
          
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

      .dev{
          height: 300px;
          width: 300px;
          margin-bottom: 15px;
      } 
   }

   .link{
        width: 200px;
        height: 40px;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 70px;
        border: solid 1px white;
        border-radius: 8px;
        color: var(--Grey-0);
        background-color: transparent;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        animation: fadeInUp 1s;

        &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px #F8F9FA;
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
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

//MEDIA QUERY ---- -- - -- - - -- -- 

@media(min-width: 768px){

    .box{
      gap: 20px;
    }
  
    .logo{
        font-size: 60px;
    }

    .dev{
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

