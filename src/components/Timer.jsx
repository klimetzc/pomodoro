import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BigButton from "./UI/BigButton";

const Timer = (props) => {
  const pomodoroTime = 1;
  const breakTime = 1;
  const secondsInMinute = 60;

  const [time, setTime] = useState(pomodoroTime * secondsInMinute);
  const [isRunning, setIsRunning] = useState(false);
  const [isNewRound, setIsNewRound] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [isSkipped, setIsSkipped] = useState(false);
  const [totalRounds, setTotalRounds] = useState(0);

  let interID = useRef();
  function secondsToTimer(seconds) {
    const minutes = `0${Math.floor(seconds / 60)}`.slice(-2); // 050 00
    const sec = `0${seconds % 60}`.slice(-2);
    return [minutes, sec];
  }

  useEffect(() => {
    if (time === 0) {
      document.title = `00:00 - ${isBreak ? "Time for a break!" : "Time to focus!"}`;
      setIsRunning(false);
      console.log(isRunning);
      setIsNewRound(true);
      const thisBreak = !isBreak;
      setIsBreak(thisBreak);
      props.getTheme(thisBreak);
      console.log(thisBreak);
      if (!isSkipped && !isBreak) {
        setTotalRounds(totalRounds + 1);
      }
      if (thisBreak) {
        setTime(breakTime * secondsInMinute);
      } else {
        setTime(pomodoroTime * secondsInMinute);
      }
      if (autoplay) {
        setIsRunning(true);
      } else {
        setIsRunning(false);
      }
      setIsSkipped(false);
    }
    if (time !== 0 && isRunning) {
      document.title = `${secondsToTimer(time)[0]}:${secondsToTimer(time)[1]} - ${
        isBreak ? "Time for a breal!" : "Time to focus!"
      }`;
      interID.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => clearTimeout(interID.current);
  }, [time, isRunning, isBreak, isSkipped]);
  const startButtonHandler = () => {
    setIsRunning(!isRunning);
    setIsNewRound(false);
  };
  return (
    <TimerWrapper>
      <p style={{ fontSize: "14px", margin: "0px" }}>{`TOTAL ROUNDS: ${totalRounds}`}</p>
      <p style={{ fontSize: "20px" }}>{isBreak ? "BREAK" : "WORKING TIME"}</p>
      {`${secondsToTimer(time)[0]}:${secondsToTimer(time)[1]}`}
      <BigButton
        handler={startButtonHandler}
        isRunning={isRunning}
        isNewRound={isNewRound}
        color={props.backCol}
      />
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          setTime(0);
          setIsNewRound(true);
          setIsSkipped(true);
        }}
        style={{
          marginTop: "10px",
        }}
      >
        SKIP STAGE
      </button>
    </TimerWrapper>
  );
};

export default Timer;

const TimerWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  border-radius: 6px;
  font-size: 120px;
  font-weight: bold;
  color: white;
  padding: 20px;
  display: flex;
  width: 620px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;
