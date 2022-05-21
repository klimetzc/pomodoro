import React, { useState } from "react";
import styled from "styled-components";
import { secondsToTimer } from "../utils/utils";

const SettingsPopup = (props) => {
  const [workTime, setWorkTime] = useState(
    +localStorage.getItem("workTime") ? localStorage.getItem("workTime") : 25
  );
  const [breakTime, setBreakTime] = useState(
    +localStorage.getItem("breakTime") ? localStorage.getItem("breakTime") : 5
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
        <PopupHeader>TIMER SETTINGS</PopupHeader>
        <PopupSection>
          <PopupSectionHeader spanNumber={3}>Time (Minutes)</PopupSectionHeader>
          <LabeledInput>
            <LabelInput hymlFor={"PomodoroTimeInput"}>Pomodoro</LabelInput>
            <NumberInput
              type="number"
              name="Pomodoro"
              id="PomodoroTimeInput"
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
          </LabeledInput>

          <LabeledInput>
            <LabelInput htmlFor={"BreakTimeInput"}>Break Time</LabelInput>
            <NumberInput
              type="number"
              name="Break"
              id="BreakTimeInput"
              min={1}
              max={99}
              value={breakTime}
              onInput={(event) => {
                setBreakTime(event.target.value);
                localStorage.setItem("breakTime", `${event.target.value}`);
              }}
            />
          </LabeledInput>
        </PopupSection>

        <PopupSection>
          <PopupSectionHeader spanNumber={2}>Autostart</PopupSectionHeader>
          <input type={"checkbox"}></input>
        </PopupSection>
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
  /* align-items: center; */
  padding: 20px;
  border-radius: 5px;
`;

const PopupHeader = styled.h2`
  color: #bbb;
  font-size: 16px;
  border-bottom: 1px solid lightgray;
  margin: 0;
  margin-bottom: 10px;
  padding-bottom: 16px;
  text-align: start;
`;

const NumberInput = styled.input`
  background-color: rgb(239, 239, 239);
  color: rgb(85, 85, 85);
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: 0;
  }
`;

const LabelInput = styled.label`
  color: lightgray;
`;

const PopupSection = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  grid-template-columns: repeat(3, 1fr);

  justify-content: space-around;
  column-gap: 30px;
  row-gap: 20px;
  padding: 20px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid lightgray;
  }
`;

const PopupSectionHeader = styled.p`
  width: 100%;
  grid-column: span ${(props) => props.spanNumber};
  box-sizing: border-box;
  font-weight: 700;
  margin: 0;
  font-size: 16px;
  /* padding: 5px; */
  color: #555555;
  /* justify-self: center; */
  /* text-align: center; */
`;

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
`;
