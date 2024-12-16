
import { useContext } from "react";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import ShirtCard from "./components/ShirtCard";
import Footer from "./components/Footer";
import { userContext } from "./context/userContext";
import './css/app.css'

export default function App() {
  const {showLoginModal} = useContext(userContext);

  return (
    <div className="App">
      <Navbar/>
      {showLoginModal && <Login/>}
      <ShirtCard/>
      <Footer/>
    </div>
  )
}