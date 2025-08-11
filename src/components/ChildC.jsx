import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>my name is {user}</div>
  )
}

export default ChildC