using WebApplication1.Models;

namespace WebApplication1.Interface
{
    public interface IOpAluno
    {
        Aluno AddAluno(Aluno aluno);
        
        void SalvarAlunos();

        List<Aluno>? GetAlunos();

        List<double>? GetAvgClass();

        List<Aluno> AlunoPlusAvg();

        List<Aluno> GetUnder();

        void DeleteAll();

        Aluno? DeleteAluno(string name);

    }
}
