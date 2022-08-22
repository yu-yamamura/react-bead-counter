import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { added, decremented, incremented } from "./counter-actions";

export type CounterState = { count: number };
export const initialCounterState: CounterState = { count: 0 };

export const counterReducer = createReducer(initialCounterState, {
  [added.type]: (state, action: PayloadAction<number>) => ({
    ...state,
    count: state.count + action.payload,
  }),
  [decremented.type]: (state) => ({
    ...state,
    count: state.count - 1,
  }),
  [incremented.type]: (state) => ({
    ...state,
    count: state.count + 1,
  }),
});
