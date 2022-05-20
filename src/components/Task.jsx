import React from "react";
import styled from "styled-components";

const Task = (props) => {
  function dragStartHandler(e, card) {
    props.setCurretCard(card);
    console.log(card);
    console.log("current", props.currentCard);
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
    console.log(card);
    props.setTaskList(
      props.taskList.map((item) => {
        if (item.id === card.id) {
          console.log({ ...item, order: props.currentCard.order });
          return { ...item, order: props.currentCard.order };
        }
        if (item.id === props.currentCard.id) {
          console.log({ ...item, order: props.currentCard.order });
          return { ...item, order: card.order };
        }
        return item;
      })
    );
    e.target.style.backgroundColor = "white";
  }

  return (
    <TaskWrapper
      draggable={true}
      setTaskList={props.setTaskList}
      taskList={props.setTaskList}
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
          props.setTaskList(props.taskList.filter((item) => item.id !== props.id));
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
