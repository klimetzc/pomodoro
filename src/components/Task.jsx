import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeTask, sortTask } from "../store/reducers/taskReduser";

const Task = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  const handleClick = (card) => {
    dispatch(removeTask(card));
  };

  function dragStartHandler(e, card) {
    props.setCurretCard(card);
  }

  function dragEndHandler(e) {
    e.target.style.backgroundColor = "white";
  }

  function dragOverHandler(e) {
    e.target.style.backgroundColor = "lightgray";
    e.preventDefault();
  }

  function dropHandler(e, card) {
    e.preventDefault();
    const newTaskList = [...tasks];
    const cardDropped = newTaskList.splice(newTaskList.indexOf(props.currentCard), 1)[0];
    newTaskList.splice(newTaskList.indexOf(card), 0, cardDropped);
    dispatch(sortTask(newTaskList));
    e.target.style.backgroundColor = "white";
  }

  return (
    <TaskWrapper
      draggable={true}
      id={props.id}
      card={props.card}
      currentCard={props.currentCard}
      setCurretCard={props.setCurretCard}
      onDragStart={(e) => {
        dragStartHandler(e, props.card);
      }}
      onDragLeave={(e) => {
        dragEndHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDragOver={(e) => {
        dragOverHandler(e);
      }}
      onDrop={(e) => {
        dropHandler(e, props.card);
      }}
    >
      {props.children}

      <DeleteButton
        onClick={() => {
          handleClick(props.card);
        }}
      >
        Delete
      </DeleteButton>
    </TaskWrapper>
  );
};

export default Task;

const TaskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: white;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 15px;
  cursor: grab;
  align-items: center;
`;

const DeleteButton = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-family: "Arial Rounded";
  font-weight: 700;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
