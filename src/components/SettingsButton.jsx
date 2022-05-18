import React from "react";
import styled from "styled-components";

const SettingsButton = (props) => {
  return (
    <SettingButtonWrapper
      onClick={() => {
        console.log("hello world");
        props.setPopupActive(true);
      }}
    >
      Settings
    </SettingButtonWrapper>
  );
};

export default SettingsButton;

const SettingButtonWrapper = styled.button`
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: inherit;
  color: white;
  align-self: center;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  /* transition: 0.1s; */
  top: 0px;
  /* transform: translateY(0); */

  &:active {
    top: 2px;
  }
`;
