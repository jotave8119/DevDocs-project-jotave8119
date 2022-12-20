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

:root {
    --Color-primary: #ff577f;
    --Color-primary-Focus: #ff427f;
    --Color-primary-Negative: #59323f;
    --Grey-0: #f8f9fa;
    --Grey-1: #868e96;
    --Grey-2: #343b41;
    --Grey-3: #212529;
    --Grey-4: #121214;
    --Sucess: #3fe864;
    --Negative: #e83f5b;
  }

`;