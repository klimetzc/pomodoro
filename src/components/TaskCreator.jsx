import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const TaskCreator = (props) => {
  const [taskText, setTaskText] = useState("");
  const newOrder = !props.taskList.length || props.taskList[props.taskList.length - 1].order + 1;
  // console.log("TASK TEXT", taskText);
  // console.log("new order: ", newOrder);

  const thisInput = useRef(null);
  const thisForm = useRef(null);
  useEffect(() => {
    // console.log("INPUT:", thisInput.current);
    thisInput.current.focus();
    function handleClickOutside(event) {
      if (thisForm.current && !thisForm.current.contains(event.target)) {
        // console.log("outside form");
        setTaskText("");
        props.setIsCreatorOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // console.log("bye bye");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props, props.isCreatorOpen]);

  return (
    <TaskCreatorWrapper
      ref={thisForm}
      setTaskList={props.setTaskList}
      taskList={props.taskList}
      isCreatorOpen={props.isCreatorOpen}
      setIsCreatorOpen={props.setIsCreatorOpen}
      onSubmit={(e) => {
        e.preventDefault();
        props.setTaskList([
          ...props.taskList,
          { title: taskText, id: Date.now(), order: newOrder },
        ]);
        setTaskText("");
        thisInput.current.focus();
        thisForm.current.scrollIntoView({ block: "start" });
      }}
      // onBlur={() => {
      //   props.setIsCreatorOpen(false);
      // }}
    >
      {/* <TaskCreatorHeader>Task Creator</TaskCreatorHeader> */}

      <TaskCreatorInput
        type={"text"}
        value={taskText}
        placeholder={"What are you working on?"}
        ref={thisInput}
        onInput={(event) => {
          setTaskText(event.target.value);
          // console.log(event.currentTarget.textContent);
        }}
      />
      <TaskCreatorSave
        disabled={taskText.length > 0 ? false : true}
        type={"submit"}
        onClick={() => {}}
      >
        Save
      </TaskCreatorSave>
    </TaskCreatorWrapper>
  );
};

export default TaskCreator;

const expand = keyframes`
  from{
    transform: scale(1,0.8);
    opacity: 0.1;
  }
  to {
    transform: scale(1,1);
    opacity: 1
  }
`;

const TaskCreatorWrapper = styled.form`
  width: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 5px;
  /* max-height: 0; */
  animation: ${expand} 0.3s linear forwards;
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
