import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counterReducer";

const Counter = (props) => {
  const [vote, setVote] = useState(0);

  const { name } = props;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setVote(vote + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVote(vote - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <h4>vote: {vote}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button onClick={handleIncrement}>Incremant</button>
        <button onClick={handleDecrement}>Decremant</button>
      </div>
    </div>
  );
};

export default Counter;
