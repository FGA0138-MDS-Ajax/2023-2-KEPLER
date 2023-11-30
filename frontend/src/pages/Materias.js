import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import turmasData from '../data/turmas-professores.json';
import Navbar from '../components/Navbar.js';
import '../styleheets/Materias.css'; // Certifique-se de que o caminho do arquivo CSS está correto
import { Grid } from '@mui/material';

function Materias() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState([
    'idTurmaProfessor',
    'nomeProfessor',
    'numeroTurma',
    'horario',
    'carga',
    'nomeMateria'
  ]);
  const [filterParam, setFilterParam] = useState('All');

  useEffect(() => {
    setItems(turmasData);
    setIsLoaded(true);
  }, []);

  function search(items) {
    return items.filter((item) => {
      if (
        (item.curso === filterParam || item.curso2 === filterParam ||
         item.curso3 === filterParam || item.curso4 === filterParam ||
         item.curso5 === filterParam) ||
        filterParam === 'All'
      ) {
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
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrates how
        this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">check it out</a>{" "}
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
                <option value="Aeroespacial">Aeroespacial</option>
                <option value="Automotiva">Automotiva</option>
                <option value="Eletronica">Eletrônica</option>
                <option value="Software">Software</option>
                <option value="Energia">Energia</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <div className="search-horario">
            <label htmlFor="search-horas">
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
                <option value="Temp">Horários</option>
                <option value="PrimeiroHorario">08:00- 9:50</option>
                <option value="SegundoHorario">10:00- 11:50</option>
                <option value="TerceiroHorario">12:00- 13:50</option>
                <option value="QuartoHorario">14:00- 15:50</option>
                <option value="QuintoHorario">16:00- 17:50</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <ul className="card-grid">
            {search(items).map((item) => (
              <li key={item.idTurmaProfessor}>
                <div className="card-wrapper">
                  <article className="card">
                    <div className="card-content">
                      <h5 className="card-name">{item.nomeMateria}</h5>
                      <ol className="card-list">
                        <li>
                          Professor: <span>{item.nomeProfessor}</span>
                        </li>
                        <li>
                          Nº Turma: <span>{item.numeroTurma}</span>
                        </li>
                        <li>
                          Horário: <span>{item.horario}</span>
                        </li>
                        <li>
                          Carga horária: <span>{item.carga}</span>
                        </li>
                        <li>
                          Código Matéria: <span>{item.codMateria}</span>
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

ReactDOM.render(<Materias />, document.getElementById('root'));

export default Materias;
