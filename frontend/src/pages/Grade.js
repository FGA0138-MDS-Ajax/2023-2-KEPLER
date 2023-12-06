import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Grade from '../styleheets/Grade.css'

// const myObjectCinco = [ 
//   "35T23", "46M34", "24M34",
//   "35M12","46T23","35M34",
//   "46M12","35T45", 
//   "24M12","26T45", "26M34"
//   ,"24T45","25T23", "26T23",
//    "24T23","46T45", "26M12",  
// ];

        
const myObject = {
  "35T23": [{"id": "3T2"}, {"id": "3T3"}, {"id": "5T2"}, {"id": "5T3"}],
  "46M34": [{"id": "4M3"}, {"id": "4M4"}, {"id": "6M3"}, {"id": "6M4"}],
  "24M34": [{"id": "2M3"}, {"id": "2M4"}, {"id": "4M3"}, {"id": "4M4"}],
  "35M12": [{"id": "3M1"}, {"id": "3M2"}, {"id": "5M1"}, {"id": "5M2"}],
  "46T23": [{"id": "4T2"}, {"id": "4T3"}, {"id": "6T2"}, {"id": "6T3"}],
  "35M34": [{"id": "3M3"}, {"id": "3M4"}, {"id": "5M3"}, {"id": "5M4"}],
  "46M12": [{"id": "4M1"}, {"id": "4M2"}, {"id": "6M1"}, {"id": "6M2"}],
  "35T45": [{"id": "3T4"}, {"id": "3T5"}, {"id": "5T4"}, {"id": "5T5"}],
  "24M12": [{"id": "2M1"}, {"id": "2M2"}, {"id": "4M1"}, {"id": "4M1"}],
  "26T45": [{"id": "2T4"}, {"id": "2T5"}, {"id": "6T4"}, {"id": "6T5"}],
  "26M34": [{"id": "2M3"}, {"id": "2M4"}, {"id": "6M3"}, {"id": "6M4"}],
  "24T45": [{"id": "2T4"}, {"id": "2T5"}, {"id": "4T4"}, {"id": "4T5"}],
  "25T23": [{"id": "2T2"}, {"id": "2T3"}, {"id": "5T2"}, {"id": "5T3"}],
  "26T23": [{"id": "2T2"}, {"id": "2T3"}, {"id": "6T2"}, {"id": "6T3"}],
  "24T23": [{"id": "2T2"}, {"id": "2T3"}, {"id": "4T2"}, {"id": "4T3"}],
  "46T45": [{"id": "4T4"}, {"id": "4T5"}, {"id": "6T4"}, {"id": "6T5"}],
  "26M12": [{"id": "2M1"}, {"id": "2M2"}, {"id": "6M1"}, {"id": "6M2"}],
  "4M1": [{ "id": "4M1" }],
  "35T6 35N1": [{ "id": "3T5" }, { "id": "3N1" }],
  "24M5 24T1": [{ "id": "2M5" }, { "id": "2T1" }, { "id": "4M5" }, { "id": "4T1" }],
  "2M12": [{ "id": "2M1" }, { "id": "2M2" }],
  "3M2": [{ "id": "3M2" }],
  "235M5 235T1": [{ "id": "2M5" }, { "id": "3M5" }, { "id": "5M5" }, { "id": "2T1" }, { "id": "3T1" }, { "id": "5T1" }],
  "246M12": [{ "id": "2M1" }, { "id": "2M2" }, { "id": "4M1" }, { "id": "4M2" }, { "id": "6M1" }, { "id": "6M2" }],
  "4M345 6M34": [{ "id": "4M3" }, { "id": "4M4" }, { "id": "4M5" }, { "id": "6M3" }, { "id": "6M4" }],
  "235M12": [{ "id": "2M1" }, { "id": "2M2" }, { "id": "3M1" }, { "id": "3M2" }, { "id": "5M1" }, { "id": "5M2" }],
  "3M34": [{ "id": "3M3" }, { "id": "3M4" }],
  "35M5 35T1": [{ "id": "3M5" }, { "id": "5M5" }, { "id": "3T1" }, { "id": "5T1" }],
  "35T45 6T4": [{ "id": "3T4" }, { "id": "3T5" }, { "id": "5T4" }, { "id": "5T5" }, { "id": "6T4" }],
  "4T2345": [{ "id": "4T2" }, { "id": "4T3" }, { "id": "4T4" }, { "id": "4T5" }],
  "235M5 235T1": [{ "id": "2M5" }, { "id": "3M5" }, { "id": "5M5" }, { "id": "2T1" }, { "id": "3T1" }, { "id": "5T1" }],
  "4T45": [{ "id": "4T4" }, { "id": "4T5" }],
  "235T45": [{ "id": "2T4" }, { "id": "2T5" }, { "id": "3T4" }, { "id": "3T5" }, { "id": "5T4" }, { "id": "5T5" }],
  "4T4":[{"id":"4T4"}],
  "3M12":[{"id": "3M1"},{"id": "3M2"}],
  "5M12":[{"id": "5M1"}, {"id": "5M2"}],
  "4T23":[{"id": "4T2" }, {"id": "4T3" }],
  "246T45":[{"id": "2T4" },{"id": "2T5" },{"id": "4T4" },{"id": "4T5" },{"id": "6T4" },{"id": "6T5" }],
  "4M34":[{"id": "4M3" },{"id": "4M4" }],
  "7T12345":[{"id": "7T1" },{"id": "7T2" },{"id": "7T3" },{"id": "7T4" },{"id": "7T5" }],
  "356M12": [{ "id": "3M1" }, { "id": "3M2" },{ "id": "5M1" }, { "id": "5M2" },{ "id": "6M1" }, { "id": "6M2" }],
  "5M34": [{ "id": "5M3" }, { "id": "5M4" }],
  "26M34 4M4": [{ "id": "2M3" },{ "id": "2M4" }, { "id": "6M3" },{ "id": "6M4" }, { "id": "4M4" }],
  "2M5 35M12": [{ "id": "2M5" }, { "id": "3M1" }, { "id": "3M2" },{ "id": "5M1" }, { "id": "5M2" }],
  "4M2": [{ "id": "4M2" }],
  "6M12": [{ "id": "6M1" }, { "id": "6M2" }],
  "4M12": [{ "id": "4M1" }, { "id": "4M2" }],
  "3M5 3T1": [{ "id": "3M5" }, { "id": "3T1" }],
  "2T23": [{ "id": "2T2" }, { "id": "2T3" }],
  "2T45": [{ "id": "2T4" }, { "id": "2T5" }],
  "24T6 24N1": [{ "id": "2T6" },{ "id": "4T6" }, { "id": "2N1" }, { "id": "4N1" }],
  "35T45 6T4": [{ "id": "3T4" }, { "id": "3T5" },{ "id": "5T4" }, { "id": "5T5" },{ "id": "6T4" }],
  "2M5 35M12": [{ "id": "2M5" }, { "id": "3M1" },{ "id": "3M2" },{ "id": "5M1" },{ "id": "5M2" }],
  "235M12": [{ "id": "2M1" }, { "id": "2M2" }, { "id": "3M1" }, { "id": "3M2" },{ "id": "5M1" }, { "id": "5M2" }],
  "35T6 35N1": [{ "id": "3T6" }, { "id": "3N1" },{ "id": "5N1" },{ "id": "5T6" }],
  "6T2345": [{ "id": "6T2" }, { "id": "6T3" }, { "id": "6T4" }, { "id": "6T5" }],
  "4T2345": [{ "id": "4T2" }, { "id": "4T3" }, { "id": "4T4" }, { "id": "4T5" }],
  "3T23": [{ "id": "3T2" }, { "id": "3T3" }],
  "6T23": [{ "id": "6T2" }, { "id": "6T3" }],
  "4M5 4T1": [{ "id": "4M5" }, { "id": "4T1" }],
  "3T45": [{ "id": "3T4" }, { "id": "3T5" }],
  "5T23": [{ "id": "5T2" }, { "id": "5T3" }],
  "2T4": [{ "id": "2T4" }],
  "2T5": [{ "id": "2T5" }],
  "3M1": [{ "id": "3M1" }],
  "4T5": [{ "id": "4T5" }],
  "2T23 4T1": [{ "id": "2T2" },{ "id": "2T3" }, { "id": "4T1" }],
  "5T2": [{ "id": "5T2" }],
  "2M34": [{ "id": "2M3" }, { "id": "2M4" }],
  "24M12 3T2": [{ "id": "2M1" },{ "id": "2M2" },{ "id": "4M1" },{ "id": "4M2" }, { "id": "3T2" }],
  "3M125 5M12": [{ "id": "3M1" },{ "id": "3M2" },{ "id": "3M5" }, { "id": "5M1" },{ "id": "5M2" }],
  "4T123 6T23": [{ "id": "4T1" },{ "id": "4T2" },{ "id": "4T3" }, { "id": "6T2" },{ "id": "6T3" }],
  "3M5 3T1": [{ "id": "3M5" }, { "id": "3T1" }],
  "246M34": [{ "id": "2M3" }, { "id": "2M4" },{ "id": "4M3" }, { "id": "4M4" }, { "id": "6M3" }, { "id": "6M4" }],
  "246T23": [{ "id": "2T2" }, { "id": "2T3" },{ "id": "4T2" }, { "id": "4T3" }, { "id": "6T2" }, { "id": "6T3" }],
  "2T2345": [{ "id": "2T2" }, { "id": "2T3" },{ "id": "2T4" },{ "id": "2T5" }],
  "35M5 35T1": [{ "id": "3M5" }, { "id": "5M5" }, { "id": "3T1" }, { "id": "5T1" }],
  "46M5 46T1": [{ "id": "4M5" }, { "id": "4T1" }, { "id": "6M5" }, { "id": "6T1" }],
  "235M34": [{ "id": "2M3" }, { "id": "2M4" },{ "id": "3M3" }, { "id": "3M4" }, { "id": "5M3" }, { "id": "5M4" }],
  "356T45": [{ "id": "3T4" }, { "id": "3T5" },{ "id": "5T4" }, { "id": "5T5" },{ "id": "6T4" }, { "id": "6T5" }],
  "235M5 235T1": [{ "id": "2M5" }, { "id": "3M5" }, { "id": "5M5" }, { "id": "2T1" }, { "id": "3T1" }, { "id": "5T1" }],
  "24M5 24T1": [{ "id": "2M5" }, { "id": "2T1" }, { "id": "4M5" }, { "id": "4T1" }],
  "26M34 4M4": [{ "id": "2M3" }, { "id": "2M4" },{ "id": "6M3" }, { "id": "6M4" },{ "id": "4M4" }],
  "26M34 4M3": [{ "id": "2M3" }, { "id": "2M4" },{ "id": "6M3" }, { "id": "6M4" }, { "id": "4M3" }],
  "4T45 6T234": [{ "id": "4T4" }, { "id": "4T5" },{ "id": "6T2" }, { "id": "6T3" },{ "id": "6T4" }],
  "46M12 2T4": [{ "id": "4M1" },{ "id": "4M2" },{ "id": "6M1" },{ "id": "6M2" }, { "id": "2T4" }],
  "235T45": [{ "id": "2T4" }, { "id": "2T5" }, { "id": "3T4" }, { "id": "3T5" },{ "id": "5T4" }, { "id": "5T5" }],
  "246M5 246T1": [{ "id": "2M5" }, { "id": "4M5" },{ "id": "6M5" }, { "id": "2T1" }, { "id": "4T1" },{ "id": "6T1" },],
  "235M5 235T1": [{ "id": "2M5" }, { "id": "3M5" }, { "id": "5M5" }, { "id": "2T1" }, { "id": "3T1" }, { "id": "5T1" }],
  "246M12": [{ "id": "4M1" },{ "id": "4M2" }, { "id": "2M1" },{ "id": "2M2" },{ "id": "6M1" },{ "id": "6M2" }],
  "46T6 46N1": [{ "id": "4T6" }, { "id": "4N1" },{ "id": "6T6" }, { "id": "6N1" }],
  "3T23 5T2" : [{"id" : "3T2"}, {"id" : "3T3"}, {"id" : "5T2"}]
}
        

const MyTableComponent = () => {

  const [valoresBack, setValoresBack] = useState([]);
  const [materiasSelecionadas, setMateriasSelecionadas] = useState([]);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user/mandar_materias')
      .then(response => {
        // console.log(response.data);
        setValoresBack(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);


  // const handleAdicionarSelection = (materia) => {
  //   // Adicione a matéria à lista de matérias selecionadas
  //   setMateriasSelecionadas((prevMaterias) => [...prevMaterias, materia]);
  // };

  // const handleCancelarSelection = (idTurmaProfessor) => {
  //   // Remova a matéria da lista de matérias selecionadas
  //   setMateriasSelecionadas((prevMaterias) =>
  //     prevMaterias.filter((materia) => materia.idTurmaProfessor !== idTurmaProfessor)
  //   );
  // };

  const handleRemoverTodas = () => {
    // Remova todas as matérias da lista de matérias selecionadas do banco de dados
    const idsTurmaProfessor = materiasSelecionadas.map((materia) => materia.idTurmaProfessor);

    // Faça uma chamada à API para remover as matérias do banco de dados
    axios
      .post('http://127.0.0.1:8000/api/user/remover_materias/', { idsTurmaProfessor })
      .then((response) => {
        console.log('Matérias removidas com sucesso do banco de dados:', response.data);
        // Limpe a lista de matérias selecionadas após a remoção bem-sucedida
        setMateriasSelecionadas([]);
        // Atualize a página automaticamente
        window.location.reload();
      })
      .catch((error) => {
        console.error('Erro ao remover matérias do banco de dados:', error);
      });
  };

  const handleCheckboxChange = (idTurmaProfessor) => {
    // Verifique se a matéria já está na lista de selecionadas
    const isAlreadySelected = materiasSelecionadas.some((materia) => materia.idTurmaProfessor === idTurmaProfessor);

    if (isAlreadySelected) {
      // Se já estiver selecionada, remova da lista
      setMateriasSelecionadas((prevMaterias) =>
        prevMaterias.filter((materia) => materia.idTurmaProfessor !== idTurmaProfessor)
      );
    } else {
      // Se não estiver selecionada, adicione à lista
      const materia = valoresBack.find((materia) => materia.idTurmaProfessor === idTurmaProfessor);
      if (materia) {
        setMateriasSelecionadas((prevMaterias) => [...prevMaterias, materia]);
      }
    }
  };

//pegar as  materias != 5 char e mandar para a tabela
  useEffect(() => {
    if (valoresBack.length > 0) {
      const keys = Object.keys(myObject);
  
      valoresBack.forEach(item => {
        const horario = item.horario;
        const matchingKey = keys.find(key => key.includes(horario));
        if (matchingKey) {
          const materiaIds = myObject[matchingKey].map(obj => obj.id);
         
          // Atualize as células da tabela com base nos ids da matéria
          materiaIds.forEach(id => {

            const cellId = `${id}`;

            const cell = document.getElementById(cellId);
            if (cell) {
              cell.innerHTML = item.nomeMateria;
            }
          });
        }
  
    });
  }
}, [valoresBack]);


  return (
    <div>
      <Navbar />
    
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Horario</th>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
            <th>Sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >08:00 - 08:50</td>
            <td id="2M1"></td>
            <td id="3M1"></td>
            <td id="4M1"></td>
            <td id="5M1"></td>
            <td id="6M1"></td>
            <td id="7M1"></td>
          </tr>
          <tr>
            <td >09:00 - 09:50</td>
            <td id="2M2"></td>
            <td id="3M2"></td>
            <td id="5M2"></td>
            <td id="6M2"></td>
            <td id="4M2"></td>
            <td id="7M2"></td>
          </tr>
          <tr>
            <td >10:00 - 10:50</td>
            <td id="2M3"></td>
            <td id="3M3"></td>
            <td id="4M3"></td>
            <td id="5M3"></td>
            <td id="6M3"></td>
            <td id="7M3"></td>
          </tr>
          <tr>
            <td >11:00 - 11:50</td>
            <td id="2M4"></td>
            <td id="3M4"></td>
            <td id="4M4"></td>
            <td id="5M4"></td>
            <td id="6M4"></td>
            <td id="7M4"></td>
          </tr>
          <tr>
            <td >12:00 - 12:50</td>
            <td id="2M5"></td>
            <td id="3M5"></td>
            <td id="4M5"></td>
            <td id="5M5"></td>
            <td id="6M5"></td>
            <td id="7M5"></td>
          </tr>
          <tr>
            <td >13:00 - 13:50</td>
            <td id="2T1"></td>
            <td id="3T1"></td>
            <td id="4T1"></td>
            <td id="5T1"></td>
            <td id="6T1"></td>
            <td id="7T1"></td>
          </tr>
          <tr>
            <td >14:00 - 14:50</td>
            <td id="2T2"></td>
            <td id="3T2"></td>
            <td id="4T2"></td>
            <td id="5T2"></td>
            <td id="6T2"></td>
            <td id="7T2"></td>
          </tr>
          <tr>
            <td >15:00 - 15:50</td>
            <td id="2T3"></td>
            <td id="3T3"></td>
            <td id="4T3"></td>
            <td id="5T3"></td>
            <td id="6T3"></td>
            <td id="7T3"></td>
          </tr>
          <tr>
            <td >16:00 - 16:50</td>
            <td id="2T4"></td>
            <td id="3T4"></td>
            <td id="4T4"></td>
            <td id="5T4"></td>
            <td id="6T4"></td>
            <td id="7T4"></td>
          </tr>
          <tr>
            <td >17:00 - 17:50</td>
            <td id="2T5"></td>
            <td id="3T5"></td>
            <td id="4T5"></td>
            <td id="5T5"></td>
            <td id="6T5"></td>
            <td id="7T5"></td>
          </tr>
          <tr>
            <td >18:00 - 18:50</td>
            <td id="2T6"></td>
            <td id="3T6"></td>
            <td id="4T6"></td>
            <td id="5T6"></td>
            <td id="6T6"></td>
            <td id="7T6"></td>
          </tr>
          <tr>
            <td >19:00 - 19:50</td>
            <td id="2N1"></td>
            <td id="3N1"></td>
            <td id="4N1"></td>
            <td id="5N1"></td>
            <td id="6N1"></td>
            <td id="7N1"></td>
          </tr>
          {/* Add the rest of your rows here */}
        </tbody>
      </table>
      
      {valoresBack.length > 0 && (
        <div className="selected-materias">
          <h2>Matérias Selecionadas</h2>
          <ul>
            {valoresBack.map((materia) => (
              <li className="bloco" key={materia.idTurmaProfessor}>
              <label>
                {materia.nomeMateria} - {materia.nomeProfessor}
                <input
                  type="checkbox"
                  checked={materiasSelecionadas.some((m) => m.idTurmaProfessor === materia.idTurmaProfessor)}
                  onChange={() => handleCheckboxChange(materia.idTurmaProfessor)}
                />
              </label>
              </li>
            ))}
          </ul>
          {valoresBack.length > 0 && (
            <button onClick={handleRemoverTodas} className="cancel-button">
              Remover Todas do Banco de Dados
            </button>
          )}
        </div>
      )}

    </div>
  );
}

export default MyTableComponent;