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

    const [showLoginModal, setShowLoginModal] = useState (false)
    return (
        <userContext.Provider value={{
            user,
            setUser,
            showLoginModal,
            setShowLoginModal
        }}>
            {children}
        </userContext.Provider>
    )
}
