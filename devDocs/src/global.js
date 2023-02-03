import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Nunito', sans-serif;
}

#root{
  overflow-x: hidden;
}

:root {
    --Color-primary: #a016c7;
    --Color-primary-Focus: #c115bb;
    --Color-primary-Negative: #59323f;
    --Grey-0: #ffffff;
    --Grey-1: #868e96;
    --Grey-2: #343b41;
    --Grey-3: #212529;
    --Grey-4: #121214;
    --Sucess: #3fe864;
    --Negative: #e83f5b;
  }

`; 