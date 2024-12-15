import { useContext, useState } from "react";
import { userContext } from "../context/userContext";
import { users } from "../mocks/users.json";
import "../css/login.css";

export default function Login() {
  const { setUser } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    //Buscar usuario por email y password
    const user = users.find((u) => u.email && u.password === password);

    if (user) {
      setUser({
        email: user.email,
        username: user.username,
        role: user.role,
      });
      alert("Bienvenido");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
