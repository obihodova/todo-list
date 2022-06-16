import React, { useState } from "react";
import "./InputWindow.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/todoReducer" ; 
import { addError, resetError } from "../../store/errorReducer" ;
import { useTypedSelector } from "../../hooks/useTypedSelector"

function InputWindow() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const isError = useTypedSelector((store) => store.error.error);

  const addTodo = () => {
    if (!isError && text.trim()) {
      let id = Math.random();
      dispatch(addTask(id, text));
      setText('');
    }
  };

  const handleFormInput = (e: any) => {
    setText(e.target.value);
    if (e.target.value.length > 160) {
      dispatch(addError(e.target.value));
    } else if (e.target.value.length < 160) {
      dispatch(resetError());
    }
  };

  return (
    <div className="input-window">
      <input onChange={(e) => handleFormInput(e)} value={text}></input>
      <button onClick={addTodo}>+</button>
      {isError ? <p>{isError}</p> : null}
    </div>
  );
}

export default InputWindow;