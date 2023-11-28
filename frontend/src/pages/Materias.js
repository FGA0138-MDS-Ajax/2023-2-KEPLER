import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import turmasData from '../data/turmas-professores.json';
import { Grid } from "@mui/material";
import materia from '../styleheets/Materias.css';
import Navbar from "../components/Navbar.js";

function Materias() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["idTurmaProfessor", "nomeProfessor", "numeroTurma", "horario", "carga", "nomeMateria"]);
    const [filterParam, setFilterParam] = useState("All");
    
    useEffect(() => {
        setItems(turmasData);
        setIsLoaded(true);
    }, []);

    function search(items) {
        return items.filter((item) => {
            if (item.region === filterParam || filterParam === "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
            return false;
        });
    }

    if (error) {
        return (
            <p>
                {error.message}, if you get this error, the free API I used
                might have stopped working, but I created a simple example that
                demonstrate how this works,{" "}
                <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                    {" "}
                    check it out{" "}
                </a>{" "}
            </p>
        );
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <>
            <Navbar />
                <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Procurar turma..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search countries here</span>
                        </label>

                        <div className="select">
                            <select
                                onChange={(e) => {
                                    setFilterParam(e.target.value);
                                }}
                                className="custom-select"
                                aria-label="Filter Professores By Curso"
                            >
                                <option value="All">Curso</option>
                                <option value="Aero">Aeroespacial</option>
                                <option value="Auto">Automotiva</option>
                                <option value="Elet">Eletrônica</option>
                                <option value="Soft">Software</option>
                                <option value="Ener">Energia</option>
                            </select>
                            <span className="focus"></span>
                        </div>
                    </div>
                    <ul className="card-grid">
                        {search(items).map((item) => (
                            <li key={item["0"]}>
                                <div className="card-wrapper">
                                    <article className="card">
                                        <div className="card-content">
                                            <h5 className="card-name">{item["nomeMateria"]}</h5>
                                            <ol className="card-list">
                                                <li>
                                                    Professor: <span>{item["nomeProfessor"]}</span>
                                                </li>
                                                <li>
                                                    Nº Turma: <span>{item["numeroTurma"]}</span>
                                                </li>
                                                <li>
                                                    Horário: <span>{item["horario"]}</span>
                                                </li>
                                                <li>
                                                    Carga horária: <span>{item["carga"]}</span>
                                                </li>
                                                <li>
                                                    Código Matéria: <span>{item["codMateria"]}</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </article>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

ReactDOM.render(<Materias />, document.getElementById("root"));

export default Materias;
