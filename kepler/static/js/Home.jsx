import React from "react";
import "../css/Home.css"
import { Link } from "react-router-dom";

function Home(){
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
                            <Link to="/Fluxograma" style={{textDecoration:'none'}}><span> Aeroespacial</span> </Link> 
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
                            <span> Software</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div></>    
    )
} 

export default Home;