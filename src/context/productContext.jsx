import { createContext, useEffect, useState } from "react";
import {products as mockProducts} from '../mocks/products.json'

//1. Crear el contexto
export const productContext = createContext()

//2. Crear el provider
export function ProductProvider ({children}){
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    const [products, setProducts] = useState([])

    //Cargar los productos obtenidos del archivo src/mocks/products.json en products
    useEffect(()=>{
        setProducts(mockProducts)
    }, [])

    //Función para eliminar un producto
    const deleteProduct = (id) => setProducts(products.filter((product) => product.id !== id));

    return (
        <productContext.Provider value={{
            showAddProductModal,
            setShowAddProductModal,
            products,
            setProducts,
            deleteProduct
        }}>
            {children}
        </productContext.Provider>
    )
}