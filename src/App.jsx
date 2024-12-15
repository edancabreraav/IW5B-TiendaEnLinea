
import { useContext } from "react";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import ShirtCard from "./components/ShirtCard";
import { userContext } from "./context/userContext";
import './css/app.css'

export default function App() {
  const {showLoginModal} = useContext(userContext);

  return (
    <div className="App">
      <Navbar/>
      {showLoginModal ? (<Login/>):(<h1></h1>)}
      <ShirtCard/>
    </div>
  )
}