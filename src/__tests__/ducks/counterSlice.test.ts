import counterSlice from "../../ducks/counterSlice";

const {
  reducer,
  actions: { added, decremented, incremented },
} = counterSlice;
let currentState: { count: number };

beforeEach(() => {
  currentState = { count: 0 };
});

describe("reducer", () => {
  describe("if action type is 'added'", () => {
    it("should return the count incremented by a number in the parameter", () => {
      expect(reducer(currentState, added(2))).toEqual({ count: 2 });
    });
  });

  describe("if action type is 'decremented'", () => {
    it("should return the count decremented by 1", () => {
      expect(reducer(currentState, decremented())).toEqual({ count: -1 });
    });
  });

  describe("if action type is 'incremented'", () => {
    it("should return the count incremented by 1", () => {
      expect(reducer(currentState, incremented())).toEqual({ count: 1 });
    });
  });
});
