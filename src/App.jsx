// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SettingsPopup from "./components/SettingsPopup";
import Tasks from "./components/Tasks";
import Timer from "./components/Timer";

function App() {
  const [backColor, setBackColor] = useState("rgb(217, 85, 80)");
  const [settingsActive, setSettingsActive] = useState(false);
  const pomodoroTime = localStorage.getItem("workTime") ? +localStorage.getItem("workTime") : 25;
  const breakTime = localStorage.getItem("breakTime") ? +localStorage.getItem("breakTime") : 5;
  const [time, setTime] = useState(pomodoroTime * 60);

  function getTheme(isBreak) {
    if (isBreak) {
      setBackColor("rgb(76, 145, 149)");
    } else {
      setBackColor("rgb(217, 85, 80)");
    }
  }
  return (
    <AppWrapper backCol={backColor}>
      <Header setPopupActive={setSettingsActive} />
      <Timer
        getTheme={getTheme}
        backCol={backColor}
        time={time}
        setTime={setTime}
        pomodoroTime={pomodoroTime}
        breakTime={breakTime}
      />
      <Tasks />
      <SettingsPopup
        active={settingsActive}
        setActive={setSettingsActive}
        time={time}
        setTime={setTime}
      />
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
  font-family: "Arial Rounded", Consolas, sans-serif;
  background-color: ${(props) => props.backCol};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  transition: background-color 0.6s;
`;
