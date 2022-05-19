import React from "react";
import styled from "styled-components";

const AddTask = () => {
  return (
    <AddTaskWrapper
      onClick={() => {
        console.log("Add Task");
      }}
    >
      &#10011; Add Task
    </AddTaskWrapper>
  );
};

export default AddTask;

const AddTaskWrapper = styled.button`
  width: 620px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  font-size: 20px;
  font-family: "Arial Rounded";
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: 10px;
`;
