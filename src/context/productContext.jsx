import { createContext, useEffect, useState } from "react";
import {products as mockProducts} from '../mocks/products.json'

//1. Crear el contexto
export const productContext = createContext()

//2. Crear el provider
export function ProductProvider ({children}){
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(mockProducts)
    }, [])

    return (
        <productContext.Provider value={{
            showAddProductModal,
            setShowAddProductModal,
            products,
            setProducts
        }}>
            {children}
        </productContext.Provider>
    )
}