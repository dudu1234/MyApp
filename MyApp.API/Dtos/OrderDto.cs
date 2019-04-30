using System;
using System.Collections.Generic;
using MyApp.API.Common;

namespace MyApp.API.Dtos
{
    public class OrderDto
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public OrderStatus Status { get; set; }
        public string TotalAmount { get; set; }
    }
}