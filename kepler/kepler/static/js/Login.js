import "../css/login.css";
import 'htmx.org';


function Login(){
    <div class="container">
  <div class="container-login">

    <div class="login-left">
      <div class="signup">
        <h1>UnB</h1>
        <span class="signup-title"> Novo Login </span>
        <div class="signup-button">
          <a href="/cadastro" hx-get="/cadastro" hx-target="#conteudo" hx-swap="outerHTML" hx-push-url="/cadastro">Criar Conta</a>
        </div>
      </div>
    </div>

    <div class="login-right">
      <div hx-post="/login" hx-target="#conteudo" hx-swap="outerHTML" hx-push-url="/home">
        <span class="login-form-title"> Faça Login </span>
        <div class="wrap-input">
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Matrícula"
            hx-vals="email:value"
          />
        </div>

        <div class="wrap-input">
          <input
            class="input"
            type="password"
            name="password"
            placeholder="Senha"
            hx-vals="password:value"
          />
        </div>
        <div class="wrap-input">
          <span class="txt1">Esqueceu a senha? </span>
          <button type="submit" class="Button-right">Entrar</button>
        </div>
      </div>
    </div>

  </div>
</div>

}

export default Login; 