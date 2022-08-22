import { useSelector } from "react-redux";
import {
  Container as SemanticContainer,
  Label,
  SemanticCOLORS,
} from "semantic-ui-react";
import { CounterState } from "../features/counter/counter-reducer";
import "./CounterBoard.css";

const colors: SemanticCOLORS[] = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));

type Props = { count: number };

const Component = ({ count }: Props) => (
  <SemanticContainer className="beads-box">
    {range(count).map((n: number) => (
      <Label circular color={colors[n % colors.length]} key={n} />
    ))}
  </SemanticContainer>
);

const Container = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <Component count={count} />;
};

export default Container;
