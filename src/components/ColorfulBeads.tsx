import {
  Container as SemanticContainer,
  Label,
  SemanticCOLORS,
} from "semantic-ui-react";
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

const ColorfulBeads = ({ count }: Props) => (
  <SemanticContainer className="beads-box">
    {range(count).map((n: number) => (
      <Label circular color={colors[n % colors.length]} key={n} />
    ))}
  </SemanticContainer>
);

export default ColorfulBeads;
