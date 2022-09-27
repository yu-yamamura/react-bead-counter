import { useReducer } from "react";
import ColorfulBeads from "./ColorfulBeads";
import type { CounterBoardProps } from "./CounterBoard";
import counterSlice from "../ducks/counterSlice";
import CounterBoard from "./CounterBoard";

type ContainerProps = { initialCount?: number };

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

const Container = ({ initialCount = 0 }: ContainerProps) => {
  const {
    reducer,
    actions: { added, decremented, incremented },
  } = counterSlice;
  const [state, dispatch] = useReducer(
    reducer,
    initialCount,
    (count: number) => ({ count })
  );

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
