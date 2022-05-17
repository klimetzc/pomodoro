import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <p>Header</p>
      <button>Settings</button>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 620px;
  box-sizing: border-box;
`;
