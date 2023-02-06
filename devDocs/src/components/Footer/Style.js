import styled from "styled-components";

export const FooterBox = styled.footer`

    width: 100vw;
    height: 100px;
    padding: 3em;
    background-color: var(--Grey-4);
    border-top: solid 3px var(--Color-primary);
    display: flex;
    flex-direction: column;
    gap: 7px;
    flex-grow: 1;

    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: justify;
        gap: 5px;
        flex-grow: 1;
        
    }

    .gitContact{
        color: var(--Grey-0);
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-right: 10px;

        &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border-radius: 10px;
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
           }
    }

    .LinContact{
        color: var(--Grey-0);
        display: flex;
        justify-content: center;
        gap: 5px;

        &:hover{
            box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
            border-radius: 10px;
            transform: translateY(-5px);
            background-color: var(--Color-primary);
            transition: 0.5s;
           }
    }

    .instContact{
        color: var(--Grey-0);
        display: flex;
        justify-content: center;
        margin-left: 25px;
        gap: 5px;

            &:hover{
                box-shadow: 0px 5px 10px 2.5px var(--Color-primary) ;
                border-radius: 10px;
                transform: translateY(-5px);
                background-color: var(--Color-primary);
                transition: 0.5s;
            }
    }

    .copy{
        color: var(--Grey-1);
        font-size: 12px;
        font-weight: 500;
        display: flex;
        margin-top: 5px;
        align-items: center;
    }

    @media(min-width: 768px){
        footer{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
`;