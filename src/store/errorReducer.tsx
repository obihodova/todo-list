import { type ActionType } from "./";

const defaultState = { error: "" };

export const ADD_ERROR = "ADD_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const errorReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case ADD_ERROR: {
      const { value } = action.payload;
      console.log(value.length);
      return {
        error: `превышен лимит текста задачи на ${-(
          160 - value.length
        )} символов`,
      };
    }

    case RESET_ERROR: {
      return {
        error: "",
      };
    }
    default:
      return state;
  }
};

export const addError = (value: string) => ({
  type: ADD_ERROR,
  payload: { value },
});

export const resetError = () => ({
  type: RESET_ERROR,
});
