import React, { memo, useRef, useState } from "react";


const SideEffect=memo(()=>{
    const count=useRef(1);
    return (
        <div className="">
            <h1>This component is rendered {count.current++} times</h1>
        </div>
    );
})

const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <p>the count is : {count}</p>
      <button onClick={()=> setCount((prev)=> prev+1)} className="cursor-pointer">Increment</button>
      <SideEffect/>
    </div>
  );
};

export default UseMemo;
