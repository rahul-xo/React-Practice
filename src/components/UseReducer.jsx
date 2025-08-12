import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.inc };

      case "DECREMENT":
        return { ...state, count: state.count - state.dec };

      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const InitialVal = {
    count: 0,
    inc: 2,
    dec: 2,
  };
  const [state, dispatch] = useReducer(reducer, InitialVal);
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen gap-2">
      <h1>{state.count}</h1>
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
      <button
        className="border border-amber-700 p-2 cursor-pointer"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
