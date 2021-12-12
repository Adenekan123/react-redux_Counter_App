import "./styles.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const voters = ["jackie", "Roland", "Jersey", "Perry"];

export default function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h3>Total count : {count}</h3>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
