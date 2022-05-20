import React, { useState } from "react";
import styled from "styled-components";

const TaskCreator = (props) => {
  const [taskText, setTaskText] = useState("");
  const newOrder = !props.taskList.length || props.taskList[props.taskList.length - 1].order + 1;
  console.log("TASK TEXT", taskText);
  console.log("new order: ", newOrder);
  return (
    <TaskCreatorWrapper
      setTaskList={props.setTaskList}
      taskList={props.taskList}
      isCreatorOpen={props.isCreatorOpen}
      setIsCreatorOpen={props.setIsCreatorOpen}
      onBlur={() => {
        props.setIsCreatorOpen(false);
      }}
    >
      {/* <TaskCreatorHeader>Task Creator</TaskCreatorHeader> */}
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <TaskCreatorInput
          type={"text"}
          value={taskText}
          placeholder={"What are you working on?"}
          onInput={(event) => {
            setTaskText(event.target.value);
            // console.log(event.currentTarget.textContent);
          }}
        />
        <TaskCreatorSave
          disabled={taskText.length > 0 ? false : true}
          onClick={() => {
            props.setTaskList([
              ...props.taskList,
              { title: taskText, id: Date.now(), order: newOrder },
            ]);
            setTaskText("");
            // props.setIsCreatorOpen(false);
          }}
        >
          Save
        </TaskCreatorSave>
      </form>
    </TaskCreatorWrapper>
  );
};

export default TaskCreator;

const TaskCreatorWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 5px;
  display: ${(props) => (props.isCreatorOpen ? "block" : "none")};
`;

const TaskCreatorHeader = styled.h2`
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

const TaskCreatorInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family: "Arial Rounded";
  font-size: 18px;
  border: none;
  padding: 15px 0;
  margin-bottom: 10px;

  &:focus {
    outline: 0;
  }
`;

const TaskCreatorSave = styled.button`
  background-color: rgb(34, 34, 34);
  border: 1px solid rgb(34, 34, 34);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgb(171, 171, 171);
    border: 1px solid rgb(171, 171, 171);
    cursor: not-allowed;
  }
`;
