import React from "react";
import "./Filter.css";
import { useSelector } from "react-redux";

function Filter() {
  const allTasks = useSelector((store) => store.todo);
  if (Object.values(allTasks).length) {
    return (
      <div className="filter">
        <select id="select">
          <option>Все</option>
          <option>Выполнено</option>
          <option>В работе</option>
          <option>Избранные</option>
        </select>
      </div>
    );
  }
}

export default Filter;