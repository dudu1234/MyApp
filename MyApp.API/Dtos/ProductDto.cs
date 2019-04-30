using System;
using MyApp.API.Common;

namespace MyApp.API.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SmallImage { get; set; }
        public string BigImage { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public ProductStatus Status { get; set; }
        public ProductCategoryDto ProductCategory { get; set; }
    }
}