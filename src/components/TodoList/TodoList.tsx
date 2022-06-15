import React from "react";
import "./TodoList.css";

import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";


function TodoList() {
  const allTasks = useSelector((store) => store.todo);
  
  return (
    <div className="todo-container">
      <div>
        {allTasks
          ? Object.values(allTasks).map(
              ({ id, description, complited, like }) => (
                <TodoItem
                  key={id}
                  description={description}
                  complited={complited}
                  like={like}
                  id={id}
                />
              )
            )
          : null}
      </div>
    </div>
  );
}

export default TodoList;