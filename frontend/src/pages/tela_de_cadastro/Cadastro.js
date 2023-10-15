import React from "react";
import { useState } from "react";
import "./Cadastro.css";
import {Link} from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");


  return (
    
    <div className="container">
      <div className="container-login">

        <div className="login-left">
            <div className="signup">
              <h1>UnB</h1>
             <span className="signup-title"> Conta já existente </span>
              <div className="signup-button">
              <Link to="/login" style={{textDecoration: 'none'}}><button>Login</button> </Link>
              </div>
            </div>
        </div>

        <div className="login-right">
          <form className="login-form">
            <span className="login-form-title"> Cadastro </span>   
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                placeholder="Email"
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
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={passwordConfirm}
                placeholder="Confirmar Senha"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <div className="wrap-input">
                <div className="Button-right"> Confirmar</div>
            </div>
          </form>
        </div>


      </div>

    </div>
  );
}

export default Cadastro;
