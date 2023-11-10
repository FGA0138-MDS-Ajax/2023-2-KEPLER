import "../css/Perfil.css";
import 'htmx.org';


function Perfil() {
  <div class="fundo-Perfil" hx-target=".fundo-Perfil">
  <div class="main-perfil" hx-target=".main-perfil">
      <div class="left-perfil" hx-target=".left-perfil">
          <h2> UNB </h2>
          <span class="Editar-perfil" hx-get="/editar_perfil"> Editar Perfil</span><br></br>
          <span class="Geren-falt" hx-get="/gerenciador_falta">Gerenciador de Falta</span><br></br>
          <button class="button-Perfil" hx-get="/voltar">Voltar</button>
      </div>
      <div class="right-perfil" hx-target=".right-perfil">
          <h3>Materias Semestre </h3> 
      </div>
  </div>
</div> 
}

    


export default Perfil;