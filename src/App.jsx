// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Timer />
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
  background-color: rgb(217, 85, 80);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 620px;
`;
