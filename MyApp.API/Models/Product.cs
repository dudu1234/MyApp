using System.Collections.Generic;
using MyApp.API.Common;

namespace MyApp.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SmallImage { get; set; }
        public string BigImage { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public ProductStatus Status { get; set; }
        public ProductCategory ProductCategory { get; set; }
        public int ProductCategoryId { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}