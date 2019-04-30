using System;
using MyApp.API.Common;

namespace MyApp.API.Dtos
{
    public class AddProductToOrderDto
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}