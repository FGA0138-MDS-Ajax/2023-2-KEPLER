import React from "react";
import "../css/Perfil.css";

function  Perfil () {
    return(
        <div className="fundo-Perfil">
            <div className="main-perfil">
                <div className="left-perfil">
                    <h2> UNB </h2>
                    <span className="Editar-perfil"> Editar Perfil</span><br></br><br></br><br></br><br></br><br></br>
                    <span className="Geren-falt">Gerenciador de Falta</span><br></br>
                    <button className="button-Perfil">Voltar</button>
                </div>
               <div className="right-perfil">
                    <h3>Materias Semestre </h3>
                
                </div> 
            </div>


        </div>
        

    )

        
}

export default Perfil;