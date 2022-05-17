// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  const [backColor, setBackColor] = useState("rgb(217, 85, 80)");
  function getTheme(isBreak) {
    console.log(backColor);
    if (isBreak) {
      console.log("break");
      setBackColor("rgb(76, 145, 149)");
    } else {
      console.log("work");
      setBackColor("rgb(217, 85, 80)");
    }
    console.log(backColor);
  }
  return (
    <AppWrapper backCol={backColor}>
      <Header />
      <Timer getTheme={getTheme} backCol={backColor} />
      {/* 
      1.Header
      2.Timer
      3.Tasks
      */}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  /* background-color: rgb(217, 85, 80); */
  font-family: "Arial Rounded", Consolas, sans-serif;
  background-color: ${(props) => props.backCol};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 100%;
  transition: 1s backgound-color;
`;
