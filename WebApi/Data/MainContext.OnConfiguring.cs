using Microsoft.EntityFrameworkCore;

namespace WebApi.Data;

    public partial class MainContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = WebApplication.CreateBuilder();
            var contextName = this.GetType().Name;
            var connectionString = builder.Configuration.GetConnectionString(contextName);
            optionsBuilder.UseSqlServer(connectionString);
        }

    }



