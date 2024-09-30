using System.Text.Json.Serialization;

namespace WebApplication1.Models
{
    public class Aluno
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; }
        public double Frequencia { get; set; }
        public List<int> Materias { get; set; } = new List<int>();

        public double Media { get { return Materias.Average(); } }

        public Aluno() { }
      
      }
    
}
