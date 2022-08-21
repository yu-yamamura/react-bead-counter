import ColorfulBoard from "./components/ColorfulBeads";
import CounterBoard from "./components/CounterBoard";
import "./App.css";

const App = () => (
  <div className="counter">
    <header>
      <h1>ビーズカンター</h1>
    </header>
    <CounterBoard />
    <ColorfulBoard />
  </div>
);

export default App;
