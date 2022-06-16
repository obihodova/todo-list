import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";
import { errorReducer } from "./errorReducer";
import { filterReducer } from "./filterReduser" ;

const rootReducer = combineReducers({
  todo: todoReducer,
  error: errorReducer,
  filter: filterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
