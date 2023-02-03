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
            border: solid 4px white;
            border-radius: 50%;
            animation: fadeIn 1s;
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

        .logout{
            color: white;
            font-size: 15px;
            font-weight: 700;
            border: solid 2px var(--Color-primary);
            width: 80px;
            border-radius: 5px;
            padding: 5px;
            text-align: center;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px var(--Color-primary);
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
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