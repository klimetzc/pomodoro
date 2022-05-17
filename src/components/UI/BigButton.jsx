import React from "react";
import styled, { css } from "styled-components";

const BigButton = (props) => {
  // console.log(props.isRunning);
  return (
    <BigButtonWrapper
      onClick={() => {
        props.handler();
      }}
      color={props.color}
      isRunning={props.isRunning}
    >
      {props.isRunning ? "STOP" : props.isNewRound ? "START" : "CONTINUE"}
    </BigButtonWrapper>
  );
};

export default BigButton;

const BigButtonWrapper = styled.button`
  background-color: white;
  cursor: pointer;
  color: ${(props) => props.color};
  font-family: "Arial Rounded";
  font-size: 40px;
  font-weight: 700;
  width: 300px;
  border: none;
  border-bottom: ${(props) =>
    props.isRunning ? "0px solid white" : "6px solid rgba(0, 0, 0, 0.2)"};
  margin-top: ${(props) => (props.isRunning ? "6px" : "0")};
  border-radius: 6px;
  padding: 10px;
  /* transition: 0.2s; */

  &:active {
    margin-top: 6px;
    border-bottom: 0px solid white;
  }

  /* ${(props) =>
    props.isRunning &&
    css`
      background-color: red;
    `} */
`;
