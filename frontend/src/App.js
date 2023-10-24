//import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="login" element={<Login />} />
          <Route exact path="cadastro" element={<Cadastro />} />
          <Route exact path="home" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
