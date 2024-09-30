import './allStudents.css';
import React, { useEffect, useState } from 'react';
import { api } from '../../config/api';

export default function AllStudents() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        api
            .get("/Alunos/Alunos")
            .then((response) => setAlunos(response.data))
            .catch((error) => {
                console.error("Erro ao obter a tabela de Alunos" + error)
            });
    }, []);


    return (
        <div className='Main'>
            <h1>
                Lista de todos os alunos da turma:
            </h1>
            {alunos.length > 0 ? (
                alunos.map((aluno) => (
                    <h4 key={aluno.id}>
                        {aluno.name} &nbsp;&nbsp;&nbsp;&nbsp;Média: {aluno.media} &nbsp;&nbsp;&nbsp;&nbsp;frequencia: {aluno.frequencia}%
                    </h4>
                ))
            ) : (
                <h4>Não existem alunos cadastrados</h4>
            )}
        </div>
    );
    
};

