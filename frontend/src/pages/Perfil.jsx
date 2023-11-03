import React from "react";
import "../stylesheets/Perfil.css";

function  Perfil () {
    return(
        <div className="fundo-Perfil">
            <div className="main-perfil">
                <div className="left-perfil">
                    <span>Editar Perfil</span>
                    <span>Gerenciador de Falta</span>
                    <button>Voltar</button>
                </div>
               <div className="right-perfil">
                    <h3>Materias Semestre</h3>
                
                </div> 
            </div>


        </div>
        

    )

        
}

export default Perfil;