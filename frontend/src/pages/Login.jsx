import React from "react";
import { useState } from "react";
import "../stylesheets/Login.css";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <div className="container">
      <div className="container-login">

        <div className="login-left">
            <div className="signup">
              <h1>UnB</h1>
             <span className="signup-title"> Novo Login </span>
              <div className="signup-button">
              <Link to="/cadastro" style={{textDecoration: 'none'}}><button>Criar Conta</button> </Link>
              </div>
            </div>
        </div>

        <div className="login-right">
          <form className="login-form">
            <span className="login-form-title"> Faça Login </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                placeholder="Matrícula"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="wrap-input">
              <span className="txt1">Esqueceu a senha? </span>
              <Link to={"/home"} style={{textDecoration: 'none'}}> <div className="Button-right"> Entrar</div></Link>    
                       </div>
          </form>
        </div>


      </div>

    </div>
  );
}

export default Login;
