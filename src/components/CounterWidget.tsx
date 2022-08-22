import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useReducer } from "react";
import ColorfulBeads from "./ColorfulBeads";
import type { CounterBoardProps } from "./CounterBoard";
import CounterBoard from "./CounterBoard";

type ContainerProps = { initialCount?: number };
type CounterState = { count: number };

const initialState: CounterState = { count: 0 };

const Component = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}: CounterBoardProps) => (
  <>
    <CounterBoard {...{ count, add, decrement, increment }} />
    <ColorfulBeads count={count} />
  </>
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    added: (state: CounterState, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state: CounterState) => ({
      ...state,
      count: state.count - 1,
    }),
    incremented: (state: CounterState) => ({
      ...state,
      count: state.count + 1,
    }),
  },
});

const Container = ({ initialCount = 0 }: ContainerProps) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number) => ({ count })
  );
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <Component
      count={state.count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default Container;
