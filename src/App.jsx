import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ShirtCard from "./components/ShirtCard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { userContext } from "./context/userContext";
import "./css/app.css";
import UsuariosPage from "./components/UsuariosPage";



export default function App() {
  const { showLoginModal } = useContext(userContext);

  return (
    
    <Router>
      <div className="App">
        <Navbar />
        {showLoginModal && <Login />}
        {/* <ShirtCard/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<ShirtCard />} />
          <Route path="/usuarios" element={<UsuariosPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
