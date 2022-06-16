import React from "react";
import "./TodoList.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import TodoItem from "../TodoItem/TodoItem";
import { todoSelector } from "../../store/filterReduser";

function TodoList(): JSX.Element {
  const allTasks = useTypedSelector(todoSelector);

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
