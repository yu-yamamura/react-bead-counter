import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Card, Statistic } from "semantic-ui-react";
import { CounterState } from "../features/counter";
import { counterSlice } from "../features/counter";
import "./CounterBoard.css";

const BULK_UNIT = 10;

type Props = {
  count: number;
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const Component = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}: Props) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="grey" onClick={() => add(BULK_UNIT)}>
          +{BULK_UNIT}
        </Button>
      </div>
    </Card.Content>
  </Card>
);

const Container = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <Component
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default Container;
