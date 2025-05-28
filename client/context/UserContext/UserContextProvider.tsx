"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import { UserContext, UserType } from './UserContext';

interface PropType{
  children:ReactNode
}

const UserContextProvider: React.FC<PropType> = ({ children }) => {
  
  const [user, setUser] = useState<UserType>({ name: "", email: "", photoUrl: "", _id: "" });
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const user = JSON.parse(token);  
      setUser(user);
    }

  } , [])

    return (
      <UserContext.Provider value={{user , setUser}}>
        {children}
      </UserContext.Provider>
  )
}

export default UserContextProvider