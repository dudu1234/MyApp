namespace MyApp.API.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public double Quantity { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}