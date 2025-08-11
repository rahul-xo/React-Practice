import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

const UserContext=createContext();
//parent
const UseContext = () => {
    const [user,setUser]=useState("rahul");
    
  return <UserContext.Provider value={user}>
    <ChildA/>
  </UserContext.Provider>
};

export default UseContext;
export {UserContext};
