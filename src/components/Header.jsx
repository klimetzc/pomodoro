import React from "react";
import styled from "styled-components";
import SettingsButton from "./SettingsButton";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLink target={"_blank"} href={"https://github.com/klimetzc/pomodoro"} rel="noreferrer">
        Pomodoro Timer
      </HeaderLink>
      <SettingsButton setPopupActive={props.setPopupActive} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  color: white;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 620px;
  box-sizing: border-box;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  display: block;
  color: inherit;
  transition: 0.4s;
  /* vertical-align: middle; */

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;
