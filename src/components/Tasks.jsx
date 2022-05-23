import React, { useState } from "react";
import styled from "styled-components";
import AddTask from "./AddTask";
import Task from "./Task";
import TaskCreator from "./TaskCreator";
import { useSelector } from "react-redux/es/exports";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.taskList);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [currentCard, setCurretCard] = useState(null);

  return (
    <TasksWrapper>
      <TasksHeader>Tasks</TasksHeader>
      {tasks.map((item) => {
        return (
          <Task
            id={item.id}
            key={item.id}
            card={item}
            currentCard={currentCard}
            setCurretCard={setCurretCard}
          >
            {item.title}
          </Task>
        );
      })}
      <TaskCreator isCreatorOpen={isCreatorOpen} setIsCreatorOpen={setIsCreatorOpen} />
      <AddTask isCreatorOpen={isCreatorOpen} setIsCreatorOpen={setIsCreatorOpen} />
    </TasksWrapper>
  );
};

export default Tasks;

const TasksWrapper = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  width: 620px;
`;

const TasksHeader = styled.h2`
  color: white;
  margin: 0;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid white;
`;
