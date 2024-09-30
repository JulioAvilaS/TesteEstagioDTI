namespace WebApplication1.Exceções
{
    public class ErroAoDeletarException : Exception
    {
        public ErroAoDeletarException(string? message) : base(message)
        {
        }
    }
}
