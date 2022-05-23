import React, { useState } from "react";
import styled from "styled-components";
import AddTask from "./AddTask";
import Task from "./Task";
import TaskCreator from "./TaskCreator";

const Tasks = () => {
  const [taskList, setTaskList] = useState([
    { title: "1 First task", id: 1, order: 1 },
    { title: "2 Second task", id: 2, order: 2 },
    { title: "3 Third task", id: 3, order: 3 },
    { title: "4 Fourth task", id: 4, order: 4 },
    { title: "5 Fifth task", id: 5, order: 5 },
  ]);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  // console.log("taskList", taskList);
  // console.log("taskList SORTED", taskList.sort(sortCards));

  const [currentCard, setCurretCard] = useState(null);
  return (
    <TasksWrapper>
      <TasksHeader>Tasks</TasksHeader>
      {/* taskList.sort(sortCards).map((item) => .... */}
      {taskList.map((item) => {
        return (
          <Task
            id={item.id}
            key={item.id}
            setTaskList={setTaskList}
            taskList={taskList}
            card={item}
            currentCard={currentCard}
            setCurretCard={setCurretCard}
          >
            {item.title}
          </Task>
        );
      })}
      <TaskCreator
        setTaskList={setTaskList}
        taskList={taskList}
        isCreatorOpen={isCreatorOpen}
        setIsCreatorOpen={setIsCreatorOpen}
      />
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
