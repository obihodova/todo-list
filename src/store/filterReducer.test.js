const { filterReducer, CHANGE_FILTER } = require("./filterReduser");

describe("filter reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      filter: 0,
    };
    expect(filterReducer(undefined, {})).toEqual(initialState);
  });

  it("should change filter in state to complited", () => {
    expect(
      filterReducer(undefined, { type: CHANGE_FILTER, payload: { filter: 1 } })
    ).toEqual({ filter: 1 });
  });
});
