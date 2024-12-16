import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import { productContext } from "../context/productContext";
import { cartContext } from "../context/cartContext";

const Navbar = () => {
  const { setShowLoginModal, user, setUser } = useContext(userContext);
  const {setShowAddProductModal} = useContext(productContext)
  const {isOpen, setIsOpen} = useContext(cartContext)
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">

      {/*Renderizado condicional para mostrar el botón de Añadir producto sólo en caso de ser administrador*/}
      {user.role === 'admin' && <button className="navbar-button" onClick={()=> setShowAddProductModal(true)}>Añadir producto</button>}

      {/*Renderizado condicional del botón para iniciar/cerrar sesión*/}
      {user.username === null ? (
        <button
          className="navbar-button"
          onClick={() => setShowLoginModal(true)}
        >
          Iniciar Sesión
        </button>
      ) : (
        <div>
        <button
          className="navbar-button"
          onClick={() => setUser({ email: null, username: null, role: null })}
        >
          Cerrar Sesión
        </button>
        {user.role === 'client' && <button className="navbar-button" onClick={toggleCart}>Carrito</button>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
