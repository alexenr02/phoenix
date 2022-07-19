import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Principal from './Components/Principal';
import Productos from './Components/Productos';
import Carrito from './Components/Carrito';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Principal />}   />
        <Route path="/productos" element={<Productos />}   />
        <Route path="/carrito" element={<Carrito />}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
