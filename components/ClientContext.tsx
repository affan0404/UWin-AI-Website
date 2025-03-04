"use client"
import { useState } from "react"
import MyContext from "./MyContext";

export default function ClientContext({ children }: { children: React.ReactNode }){
    const [loaded, setLoaded] = useState(false)

    return (
        <MyContext.Provider value={{ loaded, setLoaded }}>
            {children}
        </MyContext.Provider>
    );
}