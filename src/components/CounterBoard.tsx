import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PropType } from "../types/utils";
import { CounterState } from "../reducer";
import { add, decrement, increment } from "../actions";
import "./CounterBoard.css";
import { Button, Card, Statistic } from "semantic-ui-react";

const BULK_UNIT = 10;

type Props = {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
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
  const count = useSelector<CounterState, PropType<CounterState, "count">>(
    (state) => state.count
  );
  const dispatch = useDispatch();

  return (
    <Component
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default Container;
