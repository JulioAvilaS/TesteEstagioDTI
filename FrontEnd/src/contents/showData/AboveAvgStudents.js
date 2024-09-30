import './aboveAvgStudents.css';
import React, { useEffect, useState } from 'react';
import { api } from '../../config/api'

export default function AboveAvgStudents() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {

        api
            .get("/Alunos/PlusAvg")
            .then((response) => {
                setAlunos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao obter os alunos acima da média da turma: ", error);
            })

    }, []);



    return (
        <div className='Main'>
            <h1>
                Lista de alunos com média acima da média da turma:
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
}