import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import turmasData from '../data/turmas-professores.json';
import Navbar from '../components/Navbar.js';
import '../styleheets/Materias.css'; // Certifique-se de que o caminho do arquivo CSS está correto
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';  // Importe o BrowserRouter

import { Grid } from '@mui/material';

function extrairParteDoHorario(horarioBanco) {
  const partesDoHorario = horarioBanco.match(/[MNT]\d+|\d+[T,M,N]\d+|[T,M,N]\d+/g) || [];
  return partesDoHorario.map((parte) => {
    if (parte.match(/[MNT]\d+/)) {
      return parte.replace(/^\d+/, ''); // Remover números no início
    } else if (parte.match(/\d+[T,M,N]\d+/)) {
      return parte.replace(/\d+/, ''); // Remover números antes de T, M ou N
    } else {
      return parte.replace(/\s\d+/, ''); // Remover números após espaço
    }
  }).join('');
}

function codigoUnbParaHorario(horarioBanco) {
  const mapeamento = {
    'M1': 'PrimeiroHorario',
    'M12': 'PrimeiroHorario',
    'M2': 'PrimeiroHorario',
    'M12T2': 'PrimeiroHorario',
    'M12T4': 'PrimeiroHorario',
    'M125M12': 'PrimeiroHorario',
    'M5M12': 'PrimeiroHorario',
    'M34': 'SegundoHorario',
    'M34M3': 'SegundoHorario',
    'M34M4': 'SegundoHorario',
    'M345M34': 'SegundoHorario',
    'M5': 'TerceiroHorario',
    'M5T1': 'TerceiroHorario',
    'M5M12': 'TerceiroHorario',
    'T23T1': 'TerceiroHorario',
    'T123T23': 'TerceiroHorario',
    'T12345': 'TerceiroHorario',
    'T23': 'QuartoHorario',
    'T234': 'QuartoHorario',
    'T2345': 'QuartoHorario',
    'T23T1': 'QuartoHorario',
    'T23T2': 'QuartoHorario',
    'T123T23': 'QuartoHorario',
    'T45T234': 'QuartoHorario',
    'T12345': 'QuartoHorario',
    'M12T2': 'QuartoHorario',
    'T234': 'QuintoHorario',
    'T2345': 'QuintoHorario',
    'T4': 'QuintoHorario',
    'T45T4': 'QuintoHorario',
    'T45T234': 'QuintoHorario',
    'T45': 'QuintoHorario',
    'T5': 'QuintoHorario',
    'T12345': 'QuintoHorario',
    'M12T4': 'QuintoHorario',
    'T6N1': 'SextoHorario',
    // Adicione outros mapeamentos conforme necessário
  };
  return mapeamento[horarioBanco] || 'Temp';
}
function Materias() {
  const [selectedMaterias] = useState([]);
  const [tempSelectedMaterias, setTempSelectedMaterias] = useState([]);
  const [horarioConflitante, setHorarioConflitante] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
  const [filterHorario, setFilterHorario] = useState('Temp');

  useEffect(() => {
    setItems(turmasData);
    setIsLoaded(true);
  }, []);

  function search(items) {
    return items.filter((item) => {
      const horarioDoBanco = item.horario;
      const parteDoHorario = extrairParteDoHorario(horarioDoBanco);
      const filterHorarioConvertido = codigoUnbParaHorario(parteDoHorario);
      if (
        (item.curso === filterParam || item.curso2 === filterParam ||
          item.curso3 === filterParam || item.curso4 === filterParam ||
          item.curso5 === filterParam || filterParam === 'All') &&
        (filterHorario === 'Temp' || filterHorarioConvertido === filterHorario)
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

  function handleMateriaSelection(idTurmaProfessor) {
    const selectedMateriaItem = items.find(
      (item) => item.idTurmaProfessor === idTurmaProfessor
    );

    const isMateriaSelected = tempSelectedMaterias.some(
      (tempSelectedMateria) => tempSelectedMateria.idTurmaProfessor === idTurmaProfessor
    );

    const hasHorarioConflict = tempSelectedMaterias.some(
      (tempSelectedMateria) => tempSelectedMateria.horario === selectedMateriaItem.horario
    );

    const hasNameConflict = tempSelectedMaterias.some(
      (tempSelectedMateria) => tempSelectedMateria.nomeMateria === selectedMateriaItem.nomeMateria
    );

    if (!isMateriaSelected && !hasHorarioConflict && !hasNameConflict) {
        setTempSelectedMaterias((prevTempSelected) => [
          ...prevTempSelected,
          selectedMateriaItem,
        ]);

        // Exibe a mensagem de confirmação após a adição à lista tempSelectedMaterias
        alert("Matéria adicionada à lista temporária com sucesso!");
    } else {
      if (isMateriaSelected) {
        alert('Esta matéria já foi selecionada.');
      } else if (hasHorarioConflict) {
        alert('Há conflito de horário com outra matéria selecionada.');
      } else if (hasNameConflict) {
        alert('Você não pode selecionar matérias com o mesmo nome.');
      }
    }
  }

  function handleCancelSelection(idTurmaProfessor) {
    setTempSelectedMaterias((prevTempSelected) =>
      prevTempSelected.filter(
        (item) => item.idTurmaProfessor !== idTurmaProfessor
      )
    );
  }


  function handleConfirmSelection() {
    const confirmacao = window.confirm("Tem certeza que deseja confirmar a seleção de todas as matérias?");
    if (confirmacao) {
      const selectedIds = tempSelectedMaterias.map((item) => item.idTurmaProfessor);
    
      // Enviar dados para a view Django
      fetch('http://127.0.0.1:8000/api/user/selecionar_materia/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idTurmaProfessor: selectedIds }),  // Ajuste aqui para enviar apenas os IDs
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Success:', data);
          // Limpar as matérias temporariamente selecionadas após o sucesso
          setTempSelectedMaterias([]);
          navigate('/Grade');
        })
        .catch((error) => {
          // console.error('Error:', error);
          // Adicione lógica adicional para lidar com erros
        })
        .finally(() => {
          // Atualizar o estado para indicar que o envio foi concluído
          setIsSubmitting(false);
        });

        setHorarioConflitante(false); // Limpar o estado de conflito de horário
    }
  }


  function handleCancelSelectionTemp() {
    // Limpar tempSelectedMaterias
    setTempSelectedMaterias([]);
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
    return <>carregando...</>;
  } else {
    return (
      <>
        <Navbar />
        <div className="wrapper">

        {horarioConflitante && (
          <div className="error-message">
            <p>Conflito de horário! Não é possível selecionar matérias com horários iguais.</p>
            <button onClick={() => setHorarioConflitante(false)}>Fechar</button>
          </div>
        )}


          {tempSelectedMaterias.length > 0 && (
            <div className="temp-selected-materias">
              <h2>Matérias Selecionadas</h2>
              <ul>
                {tempSelectedMaterias.map((tempSelectedMateria) => (
                  <li className="bloco" key={tempSelectedMateria.idTurmaProfessor}>
                    {tempSelectedMateria.nomeMateria} - {tempSelectedMateria.nomeProfessor}
                    <button
                      onClick={() => handleCancelSelection(tempSelectedMateria.idTurmaProfessor)}
                      className="cancel-button"
                    >
                      Cancelar
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleConfirmSelection}
                className="confirm-button"
                disabled={isSubmitting || tempSelectedMaterias.length === 0}
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Seleção'}
              </button>
              <button onClick={handleCancelSelectionTemp} className="cancel-button">
                Cancelar Seleção
              </button>
            </div>
          )}
          
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
            <div className="select-temp">
              <select
                onChange={(e) => {
                  setFilterHorario(e.target.value);
                }}
                className="custom-select-temp"
                aria-label="Filter Professores By Curso"
              >
                <option value="Temp">Horários</option>
                <option value="PrimeiroHorario">08:00 - 09:50</option>
                <option value="SegundoHorario">10:00 - 11:50</option>
                <option value="TerceiroHorario">12:00 - 13:50</option>
                <option value="QuartoHorario">14:00 - 15:50</option>
                <option value="QuintoHorario">16:00 - 17:50</option>
                <option value="SextoHorario">18:00 - 19:50</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <ul className="card-grid">
            {search(items).map((item) => (
              <li
                key={item.idTurmaProfessor}
                className={selectedMaterias.some((selected) => selected.idTurmaProfessor === item.idTurmaProfessor) ? 'selected-card' : ''}
              >
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
                      <button
                        className="select-button"
                        onClick={() => handleMateriaSelection(item.idTurmaProfessor)}
                      >
                        Selecionar
                      </button>
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

ReactDOM.render(
  <BrowserRouter>
    <Materias />
  </BrowserRouter>,
  document.getElementById('root')
);

export default Materias;
