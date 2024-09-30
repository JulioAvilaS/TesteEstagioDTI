namespace WebApplication1.Exceções
{
    public class ParametroVazioException : Exception
    {
        public ParametroVazioException(string? message) : base(message)
        {
        }
    }
}
