import React from "react";

const InputComponent = ({Value,setValue}) => {
  return (
    <>
      <div className="flex gap-3 p-5">
        <h2>Enter Your Name : </h2>
        <input
          className="border border-white rounded-lg"
          type="text"
          placeholder="  Name"
          value={Value}
          onChange={(e)=>setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
