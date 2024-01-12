import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const incrementByAmountHandler = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form onSubmit={(e) => incrementByAmountHandler(e)}>
        <input
          type="number"
          value= {input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter amount to increment by"
        
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
