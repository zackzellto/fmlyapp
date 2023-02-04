using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace fmly.Data
{
    public class FmlyApiDbContext : DbContext
    {
        public FmlyApiDbContext(DbContextOptions<FmlyApiDbContext> options) : base(options)
        {
        }

        public DbSet<fmly.Models.User> Users { get; set; }
    }
}