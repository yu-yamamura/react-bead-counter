import "./App.css";
import CounterWidget from "./components/CounterWidget";

const App = () => (
  <div className="counter">
    <header>
      <h1>ビーズカンター</h1>
    </header>
    <CounterWidget />
  </div>
);

export default App;
