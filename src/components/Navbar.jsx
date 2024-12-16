import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import { productContext } from "../context/productContext";
import { cartContext } from "../context/cartContext";

const Navbar = () => {
  const { setShowLoginModal, user, setUser } = useContext(userContext);
  const { setShowAddProductModal } = useContext(productContext);
  const { isOpen, setIsOpen } = useContext(cartContext);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Link to='/' className="logo"><h2>Hero-Shop</h2></Link>
      {user.username!==null && <p>Bienvenido <strong>{user.username}</strong></p>}
      <div className="navbar-buttons">
      <Link to="/" className="navbar-button">Inicio</Link>
      <Link to="/catalogo" className="navbar-button">Catálogo</Link>
      
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
          <Link to='/'><button
            className="navbar-button"
            onClick={() => setUser({ email: null, username: null, role: null })}
          >
            Cerrar Sesión
          </button></Link>
          {user.role === "client" && (
            <button className="navbar-button" onClick={toggleCart}>
              Carrito
            </button>
          )}
          {/*Renderizado condicional para mostrar el botón de Añadir producto sólo en caso de ser administrador*/}
          {user.role === "admin" && (
            <button
              className="navbar-button"
              onClick={() => setShowAddProductModal(true)}
            >
              Añadir producto
            </button>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
