import './articleDeleteData.css';
import React, { useState } from 'react';
import { api } from '../config/api';

function ArticleEnterData() {

    const [formData, setFormData] = useState({
        name: '',
    });

    const handleInputChange = (e) => {

        const { id, value } = e.target;
        if (id === 'name') {
            if (value !== '') {
                setFormData({ ...formData, [id]: value })
            }
            else {
                alert("Formato de entrada de dados inválido no campo nome")
            }
        }
       

    };

    const postData = async () => {
        const { name } = formData;
    
        if (!name) {
            alert("Por favor, preencha o campo nome");
            return;
        }
    
        try {
            await api.delete(`/Alunos/${encodeURIComponent(name)}`);
            alert("Aluno deletado com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar o aluno: ", error);
            alert("Erro ao deletar o aluno. Tente novamente.");
        }
    
        setFormData({
            name: '',
            frequencia: '', 
            materias: {}    
        });
    
        window.location.reload();
    };
    

    return (
        <div className="TableD">
            <div className='Centro'>
                <label htmlFor="name">Nome: </label>
                <input type="text" placeholder='Nome do aluno existente' id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className='ButtonD'>
                <button onClick={() => postData()}>Deletar aluno</button>
            </div>
        </div>
    );
};

export default ArticleEnterData;
