import React from "react";
import "./Filter.css";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store";
import { changeFilter, FilterTypes } from "../../store/filterReduser";

function Filter(): JSX.Element | null {
  const dispatch = useDispatch();
  const onHandleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const allTasks = useSelector((store: RootState) => store.todo);

  if (Object.values(allTasks).length) {
    return (
      <div className="filter">
        <select id="select" onChange={onHandleFilters}>
          <option value={FilterTypes.All}>Все</option>
          <option value={FilterTypes.Favorite}>В избранном</option>
          <option value={FilterTypes.Complited}>Выполнено</option>
          <option value={FilterTypes.InWork}>В работе</option>
        </select>
      </div>
    );
  }
  return null;
}

export default Filter;
