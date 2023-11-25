import React from "react";
import principal from '../styleheets/Principal.css';
import { Link } from "react-router-dom";

function Principal(){
    return(
        <><div className="background-bottom">
            <div className="main-screen">
                <div className="left-screen">
                    <h1>UNB</h1>
                
                <div className="left-list">
                    <ul>
                        <li className="left-option">
                            <a href="/Perfil"style={{textDecoration:'none'}}> Perfil </a> <br></br>
                            <a href="/Materias"style={{textDecoration:'none'}}> Materias</a><br></br>
                            <a href="/Grade"style={{textDecoration:'none'}}> Grade </a>
                        </li>
                    </ul>
                    <div className="Bottom-Exit"> 
                   <Link to="/login" style={{textDecoration:'none'}}><button>Sair</button> </Link>    
                    </div>
            
                </div>
                </div>
                <div className="right-screen">
                    <h2>Grade Web</h2>
                    <div className="all-courses">
                        <div className="aeroespacial">
                            <span> Aeroespacial</span>
                        </div>
                        <div className="automotiva">
                            <span> Automotiva</span>
                        </div>
                        <div className="eletronica">
                            <span> Eletronica</span>
                        </div>
                        <div className="energia">
                            <span> Energia</span>
                        </div>
                        <div className="software">
                        <Link to="/FluxogramaSoft" style={{textDecoration:'none'}}>  <span> Software</span></Link> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div></>    
    )
} 

export default Principal;