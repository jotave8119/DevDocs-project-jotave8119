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
background-color: var(--Grey-4);

    .navBar{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: solid 2px white;
        top: 0;
        left: 0;
        position: sticky;
        z-index: 10;
        animation: fadeInDown 0.5s;

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
            border: solid 2px white;
            width: 80px;
            border-radius: 5px;
            padding: 5px;
            text-align: center;

            &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px #F8F9FA;
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
        }
        }
    }
`;