import { createContext, useState } from "react";

//1. Crear el contexto
export const userContext = createContext();

//2. Crear el provider
export function UserProvider ({children}){
    const [user, setUser] = useState({
        email: null,
        username: null,
        role: null
    })
    return (
        <userContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </userContext.Provider>
    )
}
