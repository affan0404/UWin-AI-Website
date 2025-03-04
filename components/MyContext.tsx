"use client"
import { Dispatch, SetStateAction, createContext } from 'react';


type MyContextType = {
    loaded: boolean;
    setLoaded: Dispatch<SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
