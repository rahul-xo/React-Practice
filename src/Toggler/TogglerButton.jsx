import React, { useState } from "react";

function TogglerButton() {
    const [Active,setActive]=useState(false);

    const setIsActive=()=>{
        setActive(!Active);
        console.log(Active);
        
    }
  return (
    <div className={`flex items-center justify-center h-screen ${Active ? "bg-gray-900" : "bg-white"}`}>
      <div className={`relative w-40 h-20 ${Active ? "bg-green-700" : "bg-gray-700"} rounded-full cursor-pointer transition-colors duration-300 ease-in-out`} onClick={setIsActive}>
        <div className={`absolute top-2 ${Active ? "right-2" : "left-2"} w-16 h-16 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out text-black flex items-center justify-center font-bold`}>{Active ? "ON": "OFF"}</div>
      </div>
    </div>
  );
}

export default TogglerButton;
