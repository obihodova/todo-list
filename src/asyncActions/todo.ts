import { addTask, removeTask, changeTask } from "../store/todoReducer";
import { type ActionType } from "../store";
import { Dispatch } from "redux";

export const fetchTodos = () => {
  return function (dispatch: Dispatch<ActionType>) {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.map(({ id, name }: { id: number; name: string }) =>
          dispatch(addTask(id, name))
        );
      })
      .catch((err) => console.log(err));
  };
};

export const removeTodo = (id: number) => {
  return function (dispatch: Dispatch<ActionType>) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        dispatch(removeTask(id));
        return response.json();
      })
      .catch((err) => console.log(err));
  };
};

export const updateTodo = (id: number, description: string) => {
  return function (dispatch: Dispatch<ActionType>) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        dispatch(changeTask(id, description));
        return response.json();
      })
      .catch((err) => console.log(err));
  };
};
