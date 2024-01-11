import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const incrementByAmountHandler = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form onSubmit={(e) => incrementByAmountHandler(e)}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
