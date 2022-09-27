import { Button, Card, Statistic } from "semantic-ui-react";
import "./CounterBoard.css";

const BULK_UNIT = 10;

export type CounterBoardProps = {
  count: number;
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const CounterBoard = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}: CounterBoardProps) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value data-testid="count">{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement} data-testid="decrement">
          -1
        </Button>
        <Button color="green" onClick={increment} data-testid="increment">
          +1
        </Button>
      </div>
      <div className="fluid-button">
        <Button
          fluid
          color="grey"
          onClick={() => add(BULK_UNIT)}
          data-testid="add"
        >
          +{BULK_UNIT}
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CounterBoard;
