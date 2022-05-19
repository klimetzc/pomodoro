import React from "react";
import styled from "styled-components";
import AddTask from "./AddTask";

const Tasks = () => {
  return (
    <TasksWrapper>
      <div>Tasks</div>
      <AddTask />
    </TasksWrapper>
  );
};

export default Tasks;

const TasksWrapper = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
`;
