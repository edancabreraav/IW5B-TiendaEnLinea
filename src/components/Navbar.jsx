import React, { useContext } from "react";
import { userContext } from "../context/userContext";

const Navbar = () => {
  const { setShowLoginModal, user, setUser } = useContext(userContext);

  return (
    <div className="navbar">
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
