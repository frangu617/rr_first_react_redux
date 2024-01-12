import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  clearTodo,
} from "../features/todoSlice";

export default function Todo() {
  const todo = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const clearTodosHandler = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {todo.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTodoHandler(item.id)}
            />
            {item.text}
            <button
              onClick={() => removeTodoHandler(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button onClick={clearTodosHandler}>Clear Todos</button>
    </div>
  );
}
