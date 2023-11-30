import {useState, useEffect} from"react";
import React from "react";
import styleheets from '../styleheets/Teste.css';

function Teste(){

    const [horario, setHorario] = useState('');
    const [backendMateria, setBackendMateria] = useState([]);
    const [selectedMateria, setSelectedMateria] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/horario/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ horario }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Enviado com sucesso!', responseData);
                setBackendMateria(responseData.materia_encontrada);
            } else {
                console.error('Erro ao enviar dados para a API.');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    const handleMateriaSelect = (materia) => {
        setSelectedMateria(materia);

    };

    return (
        // pegar o horario 
        <div className={styleheets.container}>
            <form onSubmit={handleSignup}>
                <h1 className={styleheets.form}>Horario</h1>
                <input 
                    type="text" 
                    placeholder="Horario" 
                    required 
                    value={horario}
                    onChange={(event) => setHorario(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>

        {backendMateria.length > 0 && (
            <div>
                Matérias Encontradas: 
                <select
                    value={selectedMateria}
                    onChange={(event) => handleMateriaSelect(event.target.value)}
                >
                    <option value="">Selecione uma matéria</option>
                    {backendMateria.map((materia, index) => (
                        <option key={index} value={materia}>
                            {materia}
                        </option>
                    ))}
                </select>
            </div>
        )}

        {selectedMateria && (
            <div>
                Matéria Selecionada:
                <p>{selectedMateria} </p>
            </div>
        )}

    </div>
    )
}
export default Teste;