import { Reducer } from "redux";
import type { CounterAction } from "./actions";
import { CounterActionType as Type } from "./actions";

export type CounterState = { count: number };
export const initialCounterState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialCounterState,
  action
) => {
  switch (action.type) {
    case Type.ADD:
    case Type.INCREMENT:
      return {
        ...state,
        count: state.count + action.amount,
      };
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - action.amount,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
