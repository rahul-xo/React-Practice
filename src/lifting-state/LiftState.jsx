import React, { useState } from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

const LiftState = () => {
  const [Value,setValue]=useState("");
  return (
    <>
      <InputComponent Value={Value} setValue={setValue}/>
      <DisplayComponent Value={Value}/>
    </>
  );
};

export default LiftState;
