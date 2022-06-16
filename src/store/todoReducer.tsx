import { type ActionType } from "./";

export type TodoState = Record<
  string,
  {
    id: number;
    description: string;
    complited: boolean;
    like: boolean;
  }
>;

const defaultState: TodoState = {};

export const ADD_TASK = "ADD_TASK";
export const CHANGE_TASK = "CHANGE_TASK";
export const ADD_LIKE = "ADD_LIKE";
export const RESET_LIKE = "RESET_LIKE";
export const ADD_COMPLITED = "ADD_COMPLITED";
export const RESET_COMPLITED = "RESET_COMPLITED";
export const REMOVE_TASK = "REMOVE_TASK";

export const todoReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case ADD_TASK: {
      const { id, description } = action.payload;

      return {
        ...state,
        [id]: {
          id: id,
          description: description,
          complited: false,
          like: false,
        },
      };
    }

    case CHANGE_TASK: {
      const { id, description } = action.payload;
      const todoItem = state[id];
      todoItem.description = description;
      return {
        ...state,
        [id]: todoItem,
      };
    }

    case ADD_LIKE: {
      const { id } = action.payload;
      const todoItem = state[id];
      todoItem.like = true;
      return {
        ...state,
        [id]: todoItem,
      };
    }

    case RESET_LIKE: {
      const { id } = action.payload;
      const todoItem = state[id];
      todoItem.like = false;
      return {
        ...state,
        [id]: todoItem,
      };
    }

    case ADD_COMPLITED: {
      const { id } = action.payload;
      const todoItem = state[id];
      todoItem.complited = true;
      return {
        ...state,
        [id]: todoItem,
      };
    }

    case RESET_COMPLITED: {
      const { id } = action.payload;
      const todoItem = state[id];
      todoItem.complited = false;
      return {
        ...state,
        [id]: todoItem,
      };
    }

    case REMOVE_TASK: {
      const { id } = action.payload;

      const newTodo = { ...state };
      delete newTodo[id];
      return {
        ...newTodo,
      };
    }

    default:
      return state;
  }
};

export const addTask = (id: number, description: string) => ({
  type: ADD_TASK,
  payload: { id, description },
});

export const changeTask = (id: number, description: string) => ({
  type: CHANGE_TASK,
  payload: { id, description },
});

export const addLike = (id: number) => ({
  type: ADD_LIKE,
  payload: { id },
});

export const resetLike = (id: number) => ({
  type: RESET_LIKE,
  payload: { id },
});

export const addComplited = (id: number) => ({
  type: ADD_COMPLITED,
  payload: { id },
});

export const resetComplited = (id: number) => ({
  type: RESET_COMPLITED,
  payload: { id },
});

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: { id },
});
