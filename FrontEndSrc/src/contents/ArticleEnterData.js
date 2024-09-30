import './articleEnterData.css';
import React, { useState } from 'react';
import { api } from '../config/api';

function ArticleEnterData() {

    const [formData, setFormData] = useState({
        name: '',
        frequencia: '',
        materias: {
            portugues: '',
            matematica: '',
            geografia: '',
            historia: '',
            ciencias: ''
        }
    });

    const handleInputChange = (e) => {

        const { id, value } = e.target;
        if (id === 'frequencia') {
            if (value !== '' && (value >= 0 && value <= 100)) {

                setFormData({ ...formData, [id]: parseInt(value) });

            }
            else {
                alert("Formato de entrada de dados inválido no campo frequência")
            }
        }
        else if (id === 'name') {
            if (value !== '') {
                setFormData({ ...formData, [id]: value })
            }
            else {
                alert("Formato de entrada de dados inválido no campo nome")
            }
        }
        else {
            if (id === 'portugues') {
                if (value !== '' && (value >= 0 && value <= 10)) {
                    setFormData({

                        ...formData,
                        materias: { ...formData.materias, [id]: parseInt(value) || '' }

                    });
                }
                else {
                    alert("Formato de entrada de dados inválido na matéria português")
                }
            }
            else if (id === 'matematica') {
                if (value !== '' && (value >= 0 && value <= 10)) {
                    setFormData({

                        ...formData,
                        materias: { ...formData.materias, [id]: parseInt(value) || '' }

                    });
                }
                else {
                    alert("Formato de entrada de dados inválido na matéria matemática")
                }
            }
            else if (id === 'historia') {
                if (value !== '' && (value >= 0 && value <= 10)) {
                    setFormData({

                        ...formData,
                        materias: { ...formData.materias, [id]: parseInt(value) || '' }

                    });
                }
                else {
                    alert("Formato de entrada de dados inválido na matéria historia")
                }
            }
            else if (id === 'geografia') {
                if (value !== '' && (value >= 0 && value <= 10)) {
                    setFormData({

                        ...formData,
                        materias: { ...formData.materias, [id]: parseInt(value) || '' }

                    });
                }
                else {
                    alert("Formato de entrada de dados inválido na matéria geografia")
                }
            }
            else if (id === 'ciencias') {
                if (value !== '' && (value >= 0 && value <= 10)) {
                    setFormData({

                        ...formData,
                        materias: { ...formData.materias, [id]: parseInt(value) || '' }

                    });
                }
                else {
                    alert("Formato de entrada de dados inválido na matéria ciências")
                }
            }


        }

    };

    const postData = async () => {
        const { name, frequencia, materias } = formData;

        if (!name || !frequencia) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        for (const materia in materias) {
            if (!materias[materia]) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }
        }
        try {
            const dataToSend = {
                name: formData.name,
                frequencia: parseFloat(formData.frequencia),
                materias: Object.values(formData.materias).map(Number) // Converter para número
            };
            await api.post("/Alunos/Insert", dataToSend);
            alert("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao inserir os dados do aluno: ", error);
        }

        setFormData({
            name: '',
            frequencia: '',
            materias: {
                portugues: '',
                matematica: '',
                geografia: '',
                historia: '',
                ciencias: ''
            }
        });

        window.location.reload();
    };

    return (
        <div className="Table">
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" placeholder='Ex: Júlio' id="name" name="name" value={formData.name} onChange={handleInputChange} />

                <label htmlFor="frequencia">Frequencia em %: </label>
                <input type="text" placeholder='0 a 100' id="frequencia" name="frequencia" value={formData.frequencia} onChange={handleInputChange} />

                <label htmlFor="portugues">Português: </label>
                <input type="text" placeholder='0 a 10' id="portugues" name="portugues" value={formData.materias.portugues} onChange={handleInputChange} />

                <label htmlFor="matematica">Matemática: </label>
                <input type="text" placeholder='0 a 10' id="matematica" name="matematica" value={formData.materias.matematica} onChange={handleInputChange} />

                <label htmlFor="geografia">Geografia: </label>
                <input type="text" placeholder='0 a 10' id="geografia" name="geografia" value={formData.materias.geografia} onChange={handleInputChange} />

                <label htmlFor="historia">História: </label>
                <input type="text" placeholder='0 a 10' id="historia" name="historia" value={formData.materias.historia} onChange={handleInputChange} />

                <label htmlFor="ciencias">Ciências: </label>
                <input type="text" placeholder='0 a 10' id="ciencias" name="ciencias" value={formData.materias.ciencias} onChange={handleInputChange} />
            </div>
            <div className='Button'>
                <button onClick={() => postData()}>Cadastrar aluno</button>
            </div>
        </div>
    );
};

export default ArticleEnterData;
