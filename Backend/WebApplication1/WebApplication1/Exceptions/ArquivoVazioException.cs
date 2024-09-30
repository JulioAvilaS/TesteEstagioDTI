namespace WebApplication1.Exceções
{
    public class ArquivoVazioException : Exception
    {
        public ArquivoVazioException(string exception) : base(exception) 
        {
        }
    }
}
