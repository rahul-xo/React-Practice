import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen gap-2">
      <h1>{count}</h1>
      <button
        className="border border-red-400 p-2 cursor-pointer"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="border border-amber-700 p-2 cursor-pointer"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
