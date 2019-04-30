using System;
using System.Collections.Generic;
using MyApp.API.Common;

namespace MyApp.API.Dtos
{
    public class OrderDetailsDto : OrderDto
    {
        public ICollection<OrderItemDto> OrderItems { get; set; }
    }
}