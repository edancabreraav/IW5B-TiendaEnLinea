import { createContext, useState } from "react";

//1. Crear el contexto
export const productContext = createContext()

//2. Crear el provider
export function ProductProvider ({children}){
    const [showAddProductModal, setShowAddProductModal] = useState(false)

    return (
        <productContext.Provider value={{
            showAddProductModal,
            setShowAddProductModal
        }}>
            {children}
        </productContext.Provider>
    )
}