import './lowAttStudents.css';
import { api } from '../../config/api';
import react, { useEffect, useState } from 'react';

export default function LowAttSudents() {

    const [alunos, setAluno] = useState([]);

    useEffect(() => {
        api
            .get("/Alunos/UnderAttendance")
            .then((response) => setAluno(response.data))
            .then((response) => {
                console.log(response.data);  // Verifique o que a API está retornando
                setAluno(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => {
                console.error("Erro ao obter os alunos abaixo da média de frequência " + error)
            });
    }, [])

    return (
        <div className='Main'>
            <h1>
                Lista de alunos com a média abaixo de 75% de frequencia:
            </h1>
            {alunos.length > 0 ? (
                alunos.map((aluno) => (
                    <h4 key={aluno.id}>
                        {aluno.name} &nbsp;&nbsp;&nbsp;&nbsp;Média: {aluno.media} &nbsp;&nbsp;&nbsp;&nbsp;frequencia: {aluno.frequencia}%
                    </h4>
                ))
            ) : (
                <h4>Não existem alunos cadastrados com menos de 75% de frequência.</h4>
            )}
        </div>
    );

};