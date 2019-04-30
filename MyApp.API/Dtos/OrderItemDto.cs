using System;
using MyApp.API.Common;
using MyApp.API.Models;

namespace MyApp.API.Dtos
{
    public class OrderItemDto
    {
        public int Id { get; set; }
        public double Quantity { get; set; }
        public ProductDto Product { get; set; }
    }
}