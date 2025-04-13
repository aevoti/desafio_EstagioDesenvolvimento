using Microsoft.EntityFrameworkCore;
using PokemonCommentsApi.Models;

namespace PokemonCommentsApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Comment> Comments => Set<Comment>();
    }
}