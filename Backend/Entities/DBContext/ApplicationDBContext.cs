
using Entities.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DBContext
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext()
        {
        }
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        => optionsBuilder.UseNpgsql("User ID=postgres;Password=root;Server=localhost;Port=5432;Database=GearedFinance;Pooling=true;");


        public  DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
       
        public DbSet<ManagerLevel> ManagerLevels { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Vendor entity
            modelBuilder.Entity<Vendor>().ToTable("Vendors");
            modelBuilder.Entity<Vendor>().Property(v => v.name).HasColumnType("varchar(100)").IsRequired();

            // Seed initial data
            modelBuilder.Entity<Vendor>().HasData(
                new Vendor {Id=1, name = "Vendor A" },
                new Vendor { Id = 2, name = "Vendor B" },
                new Vendor { Id = 3, name = "Vendor C" }
            );

            
        }

    }
}
