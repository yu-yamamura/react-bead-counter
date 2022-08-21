import { ValueOf } from "./types/utils";

export const CounterActionType = {
  ADD: "ADD",
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
} as const;

export type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount: number;
};

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
  amount: 1,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
  amount: 1,
});
