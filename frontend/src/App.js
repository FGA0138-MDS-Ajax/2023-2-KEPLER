//import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/tela_de_login/Login.js";
import Cadastro from "./pages/tela_de_cadastro/Cadastro.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
