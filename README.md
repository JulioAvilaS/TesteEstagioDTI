# Projeto para o Processo Seletivo DTI

### Descrição Problema:

Crie um sistema onde Carlos possa inserir as notas
de cada aluno (0 a 10) nas cinco disciplinas e a
frequência de cada aluno em percentual (0 a 100%). O
sistema deve calcular automaticamente a média das
notas de cada aluno, a média da turma em cada
disciplina e a frequência geral de cada aluno.
Além disso, o sistema deve permitir que Carlos veja
quais alunos têm uma média de notas acima da
média da turma e quais alunos têm uma frequência
abaixo de 75%, pois esses alunos precisam de atenção
especial.

# Como contribuir?

Para conseguir o rodar o projeto, primeiro instale as dependências.

## Dependências

### Git

<hr>

Será necessário ter o git instalado, para isso, siga a documentação disponível no link:

```json
https://git-scm.com/downloads
```

Após instalar o git, abra o terminal em uma pasta vazia, e rode o seguinte comando;

```sh
 git clone https://github.com/JulioAvilaS/TesteEstagioDti
```

### Node

<hr>

A versão do Node utilizada foi a mais recente (22.9.0), para instalar, siga a documentação do Link:

```json
https://nodejs.org/en/download/prebuilt-installer/current
```

### .Net

<hr>

Para instalar o .Net, vá para o link:

```json
https://dotnet.microsoft.com/en-us/download
```

## Rodando o projeto

Existem várias formas de se rodar o projeto, porém, irei recomendar apenas uma. Para rodar o front, será utilizado a IDE Visual Studio Code, para rodar o Backend será utilizado o Visual Studio.

### Rodando o front

Com o projeto já clonado, abra a pasta `FrontEnd` no `Visual Studio Code` e execute os comandos em ordem:

```sh
 cd src # Ir até o diretório principal do projeto
```

```sh
npm install # Instalar as dependências do projeto
```

```sh
npm start #Inicializa o projeto na porta 3000
```

Para acessar o frontend acesse o link: `http://localhost:3000`

### Rodando o back

Abrir o visual Studio e selecionar a opção de abrir uma solução. Deve-se selecionar o arquivo ".sln" presente no diretório do arquivo clonado:

```sh
BackEnd/WebApplication1/WebApplication1.sln
```

Depois disso, as coisas ficam bem automatizadas, e pode-se rodar o projeto clicando em um "play", na cor verde, presente na parte superior esqueda da página.

# Premissas Assumidas

- Objetivo: criar um site para gerência de alunos.

- Funcionalidades: É possível adicionar alunos, retirá-los e além disso ter relatórios adicionais, como:
  Médias de notas da turma; Alunos com presença abaixo de 75%; Alunos acima da média da turma.

- Limitações: 5 disciplinas obrigatórias a todos os alunos, notas de 0 a 100 e frequência de 0 a 100%.

- Ambiente: Navegador web

# Decisões Tomadas

- O frontend do projeto foi realizado com React.js, que consequentemente utiliza HTML, CSS e JS

- Foi utilizado o axios junto do React, por facilitar a divisão lógica do código e facilitar as chamadas.

- IDEs/Editores de código utilizados: VSCode e Visual Studio.

Backend (.NET):

- Controllers: Gerenciam requisições HTTP (GET, POST, DELETE) para operações com alunos.
- Services: Implementam lógica de negócios (cálculos, validações).
- Models: Definem estrutura de dados (ex: classe Aluno).

Frontend (React):

- Componentes: Divididos por funcionalidade (ex: ListaAlunos, FormularioAluno).
- Serviços: Realizam chamadas à API do backend.
- Estado: Gerenciado com hooks do React ou Context API.

Fluxo: Usuário interage com frontend -> Requisição ao backend -> Processamento -> Resposta -> Atualização da UI.

# Técnologias Utilizadas

- C#
- ASP.Net
- Newtonsoft
- React
- HTML/CSS
- Javascript
- Axios
