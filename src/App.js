import React from "react";
import { createGlobalStyle } from 'styled-components';
import Game from "./components/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Game />
    </>
  );
}

export default App;
