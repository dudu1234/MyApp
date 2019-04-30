using Microsoft.EntityFrameworkCore;
using MyApp.API.Models;

namespace MyApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<AppKeyValue> AppKeyValues { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasMany(u => u.OrderItems)
                .WithOne(p => p.Product)
                .HasForeignKey(p => p.ProductId);
        }
    }
}