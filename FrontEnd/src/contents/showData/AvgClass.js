import './avgClass.css'
import react, { useEffect, useState } from 'react';
import { api } from '../../config/api'

export default function AvgClass() {
    const [vet, setVet] = useState([]);

    useEffect(() => {
        api
            .get("/Alunos/MediaTurma")
            .then((response) => setVet(response.data))
            .catch((error) => {
                console.error("Erro ao obter os alunos acima da média da turma " + error)
            });
    }, [])

    if (vet.length >= 5) {
        return (

            <div className='MainAvg'>
                <h1 >
                    Média da classe em cada matéria:
                </h1>
                <h4>Ciencias: {vet[0].toFixed(1)} Geografia: {vet[1].toFixed(1)} Historia: {vet[2].toFixed(1)} Matemática: {vet[3].toFixed(1)} Português: {vet[4].toFixed(1)}</h4>
            </div>
        )
    }
    else {
        return (
            <div className='MainAvg'>
                <h1 >
                    Média de alunos em cada matéria:
                </h1>
                <h4>Não existem alunos cadastrados</h4>
            </div>
        )
    }

};