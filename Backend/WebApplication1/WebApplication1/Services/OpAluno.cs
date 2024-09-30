using Microsoft.CodeAnalysis.CSharp.Syntax;
using WebApplication1.Models;
using System.Text.Json;
using Newtonsoft.Json;
using Humanizer;
using WebApplication1.Exceções;
using WebApplication1.Interface;
using WebApplication1.Exceptions;



namespace WebApplication1.Services
{
    public class OpAluno : IOpAluno
    {
        private List<Aluno>? alunos = new List<Aluno>();

        private const int numeroMaterias = 5;

        public Aluno AddAluno(Aluno aluno)
        {
            alunos?.Add(aluno);
            return aluno;
        }


        public void SalvarAlunos()
        {
            string json = File.ReadAllText("Data/Alunos.json");
            List<Aluno> alunosInArq = new List<Aluno>();

            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");

            }
            alunosInArq = JsonConvert.DeserializeObject<List<Aluno>>(json) ?? new List<Aluno>();
            if (alunos == null && alunos.Count <= 0)
            {
                throw new ListaAlunosVazioException("A lista de alunos está vazia");
            }
            alunosInArq.AddRange(alunos);

            string arqContent = JsonConvert.SerializeObject(alunosInArq);
            File.WriteAllText("Data/Alunos.json", arqContent);
        }

        public List<Aluno>? GetAlunos()
        {
            string json = File.ReadAllText("Data/Alunos.json");

            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");
            }
            return alunos = JsonConvert.DeserializeObject<List<Aluno>>(json);
            


        }

        public List<double>? GetAvgClass()
        {
            string json = File.ReadAllText("Data/Alunos.json");

            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");
            }

            List<Aluno>? alunosInArq = JsonConvert.DeserializeObject<List<Aluno>>(json);
            List<double> mediaNotas = new List<double>(new double[numeroMaterias]);
            foreach (var aluno in alunosInArq)
            {
                for (int i = 0; i < numeroMaterias; i++)
                {
                    mediaNotas[i] += aluno.Materias[i];
                }
            }
            for (int i = 0; i < numeroMaterias; i++)
            {
                mediaNotas[i] = mediaNotas[i] / alunosInArq.Count;
            }


            return mediaNotas;

        }

        public List<Aluno> AlunoPlusAvg()
        {
            string json = File.ReadAllText("Data/Alunos.json");

            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");
            }

            List<Aluno>? alunosInArq = JsonConvert.DeserializeObject<List<Aluno>>(json);

            List<Aluno> alunosAcima = new List<Aluno>();

            if (alunosInArq?.Count < 1)
            {
                throw new ListaAlunosVazioException("A lista de alunos está vazia");
            }

            double sum = 0;
            foreach (var aluno in alunosInArq)
            {
                sum += aluno.Media;
            }
            var avg = sum / alunosInArq.Count;

            foreach (var aluno in alunosInArq)
            {
                if (aluno.Media > avg)
                {
                    alunosAcima.Add(aluno);
                }
            }

            return alunosAcima;

        }

        public List<Aluno> GetUnder()
        {
            string json = File.ReadAllText("Data/Alunos.json");

            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");
            }

            List<Aluno>? alunosInArq = JsonConvert.DeserializeObject<List<Aluno>>(json);

            List<Aluno> underAlunos = new List<Aluno>();

            foreach (var aluno in alunosInArq)
            {
                if (aluno.Frequencia < 75)
                {
                    underAlunos.Add(aluno);
                }
            }

            return underAlunos;
        }

        public void DeleteAll()
        {
            File.WriteAllText("Data/Alunos.json", "");
            if (alunos != null)
                alunos?.Clear();
        }

        public Aluno? DeleteAluno(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new ParametroVazioException("O nome não foi enviado");
            }

            string json = File.ReadAllText("Data/Alunos.json");
            if (string.IsNullOrEmpty(json))
            {
                throw new ArquivoVazioException("O Arquivo está vazio");
            }

            List<Aluno>? alunosInArq = JsonConvert.DeserializeObject<List<Aluno>>(json);

            var alunoRemovido = alunosInArq?.FirstOrDefault(x => x.Name?.ToLower() == name?.ToLower());

            if (alunoRemovido != null)
            {
                alunosInArq?.RemoveAll(x => x.Name?.ToLower() == name?.ToLower());
            }

            return alunoRemovido;
        }
    }
}
