import "../css/Cadastro.css";
import 'htmx.org';


function Cadastro(){
    <div class="container">
  <div class="container-login">

    <div class="login-left">
      <div class="signup">
        <h1>UnB</h1>
        <span class="signup-cadastro"> Conta já existente </span>
        <div class="signup-button">
          <a href="/login" hx-get="/login" style="text-decoration: none;"><button>Login</button></a>
        </div>
      </div>
    </div>

    <div class="login-right">
      <form class="login-form" hx-post="/cadastrar">
        <span class="login-form-title"> Cadastro </span>
        <div class="wrap-input" hx-target=".container">
          <input
            class="has-val input"
            type="matriculas"
            value=""
            placeholder="Matricula"
            hx-vals="Matriculas: value"
          />
        </div>
        <div class="wrap-input" hx-target=".container">
          <input
            class="has-val input"
            type="email"
            value=""
            placeholder="Email"
            hx-vals="email: value"
          />
        </div>

        <div class="wrap-input" hx-target=".container">
          <input
            class="has-val input"
            type="password"
            value=""
            placeholder="Senha"
            hx-vals="password: value"
          />
        </div>
        <div class="wrap-input" hx-target=".container">
          <input
            class="has-val input"
            type="password"
            value=""
            placeholder="Confirmar Senha"
            hx-vals="passwordConfirm: value"
          />
        </div>
        <div class="wrap-input">
          <button class="Button-right" type="submit">Confirmar</button>
        </div>
      </form>
    </div>
  </div>
</div>

}


export default Cadastro;