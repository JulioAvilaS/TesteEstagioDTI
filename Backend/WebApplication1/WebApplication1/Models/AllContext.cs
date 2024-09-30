using Microsoft.AspNetCore.Mvc.Diagnostics;
using Microsoft.EntityFrameworkCore;


namespace WebApplication1.Models
{
    public class AllContext : DbContext
    {
        

        public AllContext(DbContextOptions<AllContext> options)
            : base(options)
        { 
        }

        public DbSet<Aluno> AllItems { get; set; } = null;
    }
}
