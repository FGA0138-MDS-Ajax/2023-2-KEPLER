//import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Fluxograma from "./pages/Fluxograma";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="login" element={<Login />} />
          <Route exact path="cadastro" element={<Cadastro />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="perfil" element={<Perfil />} />
          <Route exact path="fluxograma" element={<Fluxograma />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
