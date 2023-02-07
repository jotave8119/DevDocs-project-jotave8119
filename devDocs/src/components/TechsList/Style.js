import styled from "styled-components";

export const ListContainer = styled.section`

*{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Nunito', sans-serif;
}

width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 25px;
animation: fadeInUp 1s;


li{
    height: 250px;
    width: 250px;
    border: solid 1px var(--Color-primary);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--Grey-3);

    .imgBox{
        display: flex;
        align-items: center;
        border-radius: 15px 15px ;
        justify-content: center;
        width: 100%;
        height: 120px;
        border-bottom: solid 1px var(--Color-primary);
        padding: 4px;
        background-color: var(--Grey-2);

        &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px var(--Color-primary);
            transform: translateY(-5px);
            transition: 0.5s;
           }

        .techImg{
            width: 100%;
            height: 80%;
            object-fit: contain;
            margin-top: 20px;
            margin-bottom: 25px;
            
        }
    }



    .info{
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 100%;

        .techName{
            margin-left: 7px;
            margin-top: 15px;
        }
        
        .techArea{
            margin-left: 7px;
            color: var(--Grey-1);
            font-size: 13px;
        }
    }

    .docBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .documentation{
            margin-top: 20px;
            width: 40%;
            text-align: center;
            font-weight: 700;
            border-radius: 5px;
            padding: 3px;
            color: var(--Grey-0);
            background-color: var(--Color-primary);

            &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border: solid 1px var(--Color-primary);
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
           }
        }
    }
}


`;