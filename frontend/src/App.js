import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import Principal from "./pages/Principal";
import FluxogramaSoft from "./pages/FluxogramaSoft"; 
import Perfil from "./pages/Perfil";
import Materias from "./pages/Materias";
import Grade from "./pages/Grade";
import FluxogramaAero from "./pages/FluxogramaAero"
import Fluxogramas from "./pages/Fluxograma" 
import FluxogramaAuto from "./pages/FluxogramaAuto"
import FluxogramaEle from "./pages/FluxogramaEle"
import FluxogramaEner from "./pages/FluxogramaEner"
import Teste from "./pages/Teste"


function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/Materias" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          <Route exact path="principal" element={<Principal/>} />
          <Route exact path="fluxogramaSoft" element={<FluxogramaSoft/>} />
          <Route exact path="perfil" element={<Perfil/>} />
          <Route exact path="Materias" element={<Materias/>} />      
          <Route exact path="fluxogramaAero" element={<FluxogramaAero/>} />
          <Route exact path="Fluxogramas" element={<Fluxogramas/>} />
          <Route exact path="grade" element={<Grade/>} />
          <Route exact path="fluxogramaAuto" element={<FluxogramaAuto/>} />
          <Route exact path="fluxogramaEle" element={<FluxogramaEle/>} />
          <Route exact path="fluxogramaEner" element={<FluxogramaEner/>} />
          <Route exact path="testando" element={<Teste/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
