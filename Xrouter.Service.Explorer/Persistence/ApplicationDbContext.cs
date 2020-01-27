using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Persistence
{
    public class ApplicationDbContext
    : IdentityDbContext<ApplicationUser>
    {
        private readonly string _userId;
        public virtual DbSet<MyServicenode> ServiceNodes { get; set; }
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var index = modelBuilder.Entity<ApplicationUser>()
                .HasIndex(u => new { u.NormalizedUserName }).Metadata;
            modelBuilder.Entity<ApplicationUser>().Metadata.RemoveIndex(index.Properties);

            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(u => new { u.NormalizedUserName, u.Discriminator })
                .IsUnique();
        }
    }
}
