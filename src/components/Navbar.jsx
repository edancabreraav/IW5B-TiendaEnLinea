import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import { productContext } from "../context/productContext";

const Navbar = () => {
  const { setShowLoginModal, user, setUser } = useContext(userContext);
  const {setShowAddProductModal} = useContext(productContext)

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
        <button
          className="navbar-button"
          onClick={() => setUser({ email: null, username: null, role: null })}
        >
          Cerrar Sesión
        </button>
      )}
    </div>
  );
};

export default Navbar;
