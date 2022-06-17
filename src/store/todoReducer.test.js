const { todoReducer, ADD_TASK } = require("./todoReducer");

describe("filter reducer", () => {
  it("should return the initial state", () => {
    const initialState = {};
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it("should add task to state", () => {
    expect(
      todoReducer(undefined, {
        type: ADD_TASK,
        payload: { id: 123, description: "Какая-то тасочка" },
      })
    ).toEqual({
      123: {
        id: 123,
        description: "Какая-то тасочка",
        complited: false,
        like: false,
      },
    });
  });
});
