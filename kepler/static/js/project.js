import '../sass/project.scss';
//import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../js/Login";
import Cadastro from "../js/Cadastro";
import Home from "../js/Home";
import Perfil from "../js/Perfil";
import Fluxograma from "../js/Fluxograma";

function project() {
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

export default project;

/* Project specific Javascript goes here. */
