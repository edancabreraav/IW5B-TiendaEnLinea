import { createContext, useState } from "react";

//1. Crear contexto
export const cartContext = createContext();

//2. Crear el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  //Función para añadir un producto al carrito
  const addToCart = (product) => {
    //Verificar si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    //Si el producto no está en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  //Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  //Función para quitar TODOS los productos del carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        removeFromCart,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
