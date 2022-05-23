import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BigButton from "./BigButton";
import * as workerTimer from "worker-timers";
import { secondsToTimer } from "../utils/utils";

const Timer = (props) => {
  // const breakTime = 5;
  const secondsInMinute = 60;

  const [time, setTime] = [props.time, props.setTime];
  const [isRunning, setIsRunning] = useState(false);
  const [isNewRound, setIsNewRound] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const [totalRounds, setTotalRounds] = useState(0);

  let interID = useRef();
  if (isBreak) {
    document.querySelector("#favicon").href = "/favicon-green.ico";
  } else {
    document.querySelector("#favicon").href = "/favicon-red.ico";
  }

  useEffect(() => {
    // console.log(interID.current);
    if (time === 0) {
      document.title = `${isBreak ? "Time to focus!" : "Time for a break!"}`;
      setIsRunning(false);
      // console.log(isRunning);
      setIsNewRound(true);
      const thisBreak = !isBreak;
      setIsBreak(thisBreak);
      props.getTheme(thisBreak);
      // console.log("THIS BREAK", thisBreak);
      if (!isSkipped && !isBreak) {
        setTotalRounds(totalRounds + 1);
      }
      if (thisBreak) {
        // console.log("BREAK TIME", props.breakTime);
        setTime(props.breakTime * secondsInMinute);
      } else {
        setTime(props.pomodoroTime * secondsInMinute);
      }
      if (autoplay) {
        setIsRunning(true);
      } else {
        setIsRunning(false);
      }
      setIsSkipped(false);
      // console.log("Round ended");
      // clearTimeout(interID.current);
    }
    if (time !== 0 && isRunning) {
      document.title = `${secondsToTimer(time)[0]}:${secondsToTimer(time)[1]} - ${
        isBreak ? "Time for a break!" : "Time to focus!"
      }`;
      interID.current = workerTimer.setInterval(() => {
        // console.log("tick");
        setTime(time - 1);
      }, 1000);
    }

    return () => workerTimer.clearInterval(interID.current);
  }, [time, isRunning, isBreak, isSkipped, props, autoplay, totalRounds, setTime]);

  const startButtonHandler = () => {
    setIsRunning(!isRunning);
    setIsNewRound(false);
  };

  const skipHandler = () => {
    setIsRunning(!isRunning);
    setTime(0);
    setIsNewRound(true);
    setIsSkipped(true);
    clearTimeout(interID);
  };

  return (
    <TimerWrapper>
      <p style={{ fontSize: "14px", margin: "0px" }}>{`COMPLETED ROUNDS: ${totalRounds}`}</p>
      <p style={{ fontSize: "20px" }}>{isBreak ? "BREAK" : "WORKING TIME"}</p>
      {`${secondsToTimer(time)[0]}:${secondsToTimer(time)[1]}`}
      <BigButton
        handler={startButtonHandler}
        isRunning={isRunning}
        isNewRound={isNewRound}
        color={props.backCol}
      />
      <button
        onClick={skipHandler}
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
