import { createContext } from "react";

export interface UserType{
    name: string;
    email: string;
    photoUrl: string;
    _id: string;
}

interface userContextType{
    user: UserType;
    setUser : (user:UserType) => void
}

const defaultValues: userContextType = {
    user: {name:"" , email:"" , photoUrl:"" , _id:""},
    setUser : ()=> {}
}

export const UserContext = createContext<userContextType>(defaultValues);