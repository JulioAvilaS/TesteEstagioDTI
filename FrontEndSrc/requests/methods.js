import {api} from '../src/config/api';


export const EditarProduto = async (produto) => {
    try {
      const produtoString = JSON.stringify(produto);
      debugger;
      await api.post("/Alunos", produtoString);
    } catch (error) {
      throw error;
    }
  };
  