using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using MyApp.API.Common;

namespace MyApp.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public OrderStatus Status { get; set; }
        public double TotalAmount { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}