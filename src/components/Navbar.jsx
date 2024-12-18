import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import { productContext } from "../context/productContext";
import { cartContext } from "../context/cartContext";
import { LoginIcon, LogoutIcon, ShoppingCartIcon, HomeIcon, AddProductIcon } from "./Icons";

const Navbar = () => {
  const { setShowLoginModal, user, setUser } = useContext(userContext);
  const { setShowAddProductModal } = useContext(productContext);
  const { isOpen, setIsOpen, setCart } = useContext(cartContext);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Hero-Shop</h2>
      </Link>
      {user.username !== null && (
        <p>
          Bienvenido <strong>{user.username}</strong>
        </p>
      )}
      <div className="navbar-buttons">
        <Link to="/" className="navbar-button" title="Inicio">
          <HomeIcon />
        </Link>
        <div className="catalogo-usuarios-container">
          <Link to="/catalogo" className="navbar-button">
            Catálogo
          </Link>

          {user.role === "admin" && (
            <Link to="/usuarios">
              <button className="navbar-button" title="Usuarios">
                Usuarios
              </button>
            </Link>
          )}
        </div>

        {user.username === null ? (
          <button
            className="navbar-button"
            title="Iniciar Sesión"
            onClick={() => setShowLoginModal(true)}
          >
            <LoginIcon />
          </button>
        ) : (
          <div>
            <Link to="/">
              <button
                className="navbar-button"
                title="Cerrar Sesión"
                onClick={() => {
                  setUser({ email: null, username: null, role: null });
                  setIsOpen(false);
                  setCart([]);
                  alert(`¡Vuelve pronto ${user.username}!`);
                }}
              >
                <LogoutIcon />
              </button>
            </Link>
            {user.role === "client" && (
              <button
                className="navbar-button"
                title="Ver carrito"
                onClick={toggleCart}
              >
                <ShoppingCartIcon />
              </button>
            )}
            {user.role === "admin" && (
              <>
                <Link to="/catalogo">
                  <button
                    className="navbar-button"
                    title="Añadir producto"
                    onClick={() => setShowAddProductModal(true)}
                  >
                    <AddProductIcon />
                  </button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
