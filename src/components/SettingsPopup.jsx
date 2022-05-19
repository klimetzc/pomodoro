import React, { useState } from "react";
import styled from "styled-components";
import { secondsToTimer } from "../utils/utils";

const SettingsPopup = (props) => {
  const [workTime, setWorkTime] = useState(
    +localStorage.getItem("workTime") ? localStorage.getItem("workTime") : 25
  );
  const [breakTime, setBreakTime] = useState(
    +localStorage.getItem("breakTime") ? localStorage.getItem("workTime") : 5
  );
  return (
    <SettingsPopupWrapper
      isOpen={props.active}
      onMouseDown={(event) => {
        console.log(event.target);
        props.setActive(false);
      }}
    >
      <PopupContentWrapper
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <p>Pomodoro Time {workTime}</p>
        <input
          type="range"
          name="Pomodoro"
          id=""
          min={1}
          max={99}
          value={workTime}
          onInput={(event) => {
            setWorkTime(event.target.value);
          }}
          onChange={(event) => {
            localStorage.setItem("workTime", `${event.target.value}`);
            props.setTime(+localStorage.getItem("workTime") * 60);
          }}
        />
        <p>Break Time {breakTime}</p>
        <input
          type="range"
          name="Break"
          id=""
          min={1}
          max={99}
          value={breakTime}
          onInput={(event) => {
            setBreakTime(event.target.value);
          }}
        />
      </PopupContentWrapper>
    </SettingsPopupWrapper>
  );
};

export default SettingsPopup;

const SettingsPopupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const PopupContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;
