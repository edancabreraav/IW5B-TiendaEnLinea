import { createContext, useState, useEffect } from "react";
import { users as mockUsers } from "../mocks/users.json"

//1. Crear el contexto
export const userContext = createContext();

//2. Crear el provider
export function UserProvider ({children}){
    const [user, setUser] = useState({
        email: null,
        username: null,
        role: null
    })
    const [users, setUsers] = useState([])

    useEffect(() =>{
        setUsers(mockUsers)
    },[])

    const [showLoginModal, setShowLoginModal] = useState (false)
    return (
        <userContext.Provider value={{
            user,
            setUser,
            showLoginModal,
            setShowLoginModal,
            users,
            setUsers
        }}>
            {children}
        </userContext.Provider>
    )
}
