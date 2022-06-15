import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  error: errorReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);