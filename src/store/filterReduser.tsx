import { type RootState, type ActionType } from "./";

export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_FAVORITE_MODE = "CHANGE_FAVORITE_MODE";

export enum FilterTypes {
  All,
  Complited,
  Favorite,
  InWork,
}

export interface FilterState {
  filter: FilterTypes;
}

const defaultState: FilterState = {
  filter: FilterTypes.All,
};

export const filterReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const filter = action.payload.filter;
      return {
        ...state,
        filter,
      };
    }
    default:
      return state;
  }
};

export const changeFilter = (filter: string) => ({
  type: CHANGE_FILTER,
  payload: { filter },
});

export const todoSelector = (state: RootState) => {
  const { filter } = state;
  const prevState = Object.values(state.todo);
  let result = [];

  switch (Number(filter.filter)) {
    case FilterTypes.Favorite: {
      result = prevState.filter((item) => {
        if (item.like && !item.complited) {
          return true;
        }
      });

      break;
    }
    case FilterTypes.Complited: {
      result = prevState.filter((item) => {
        if (item.complited) {
          return true;
        }
      });

      break;
    }
    case FilterTypes.InWork: {
      result = prevState.filter((item) => !item.complited);

      break;
    }
    default: {
      result = [...prevState];
    }
  }
  return result;
};
