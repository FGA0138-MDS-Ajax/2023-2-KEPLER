import React, { useState } from 'react';
import Grade from '../styleheets/Grade.css'; // Importe o arquivo de estilo corretamente
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";


const Critérios = () => {
  const [inputValues, setInputValues] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  const handleInputChange = (row, col, value) => {
    const newInputValues = [...inputValues];
    newInputValues[row][col] = value;
    setInputValues(newInputValues);
  };

  // Função para renderizar a tabela
  const renderTable = () => {
    const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    const timeSlots = ['08:00-09:50', '10:00-11:50', '12:00-13:50', '14:00-15:50', '16:00-17:50'];

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td>{time}</td>
              {inputValues[rowIndex].map((inputValue, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    
    <div className="Critérios">
       <Navbar />
      <h2>Adicione os critérios:</h2>
      {renderTable()}
    </div>
  );
};

export default Critérios;
