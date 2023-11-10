import "../css/Home.css";
import 'htmx.org';




function Home(){
    <div class="background-bottom" hx-target=".background-bottom">
  <div class="main-screen" hx-target=".main-screen">
    <div class="left-screen">
      <h1>UNB</h1>
      <div class="left-list">
        <ul>
          <li class="left-option">
            <a href="/Perfil" hx-get="/Perfil" style="text-decoration:none;">Perfil</a><br />
            <a href="/Materias" hx-get="/Materias" style="text-decoration:none;">Materias</a><br />
            <a href="/Grade" hx-get="/Grade" style="text-decoration:none;">Grade</a>
          </li>
        </ul>
        <div class="Bottom-Exit">
          <a href="/login" hx-get="/login" style="text-decoration:none;"><button>Sair</button></a>
        </div>
      </div>
    </div>
    <div class="right-screen">
      <h2>Grade Web</h2>
      <div class="all-courses">
        <div class="aeroespacial" hx-get="/Fluxograma">
          <span> Aeroespacial</span>
        </div>
        <div class="automotiva">
          <span> Automotiva</span>
        </div>
        <div class="eletronica">
          <span> Eletronica</span>
        </div>
        <div class="energia">
          <span> Energia</span>
        </div>
        <div class="software">
          <span> Software</span>
        </div>
      </div>
    </div>
  </div>
</div>

}

export default Home; 