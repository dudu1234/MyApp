using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyApp.API.Common;
using MyApp.API.Models;

namespace MyApp.API.Data
{
    public class AppRepository : IAppRepository
    {
        private const int V = 0;
        private readonly DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int userId)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == userId);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<Product> GetProduct(int productId)
        {
            var product = await _context.Products
                .FirstOrDefaultAsync(u => u.Id == productId);
            return product;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await _context.Products.Include(x => x.ProductCategory).ToListAsync();
            return products;
        }

        public async Task<IEnumerable<ProductCategory>> GetProductCategories()
        {
            var productCategories = await _context.ProductCategories.ToListAsync();
            return productCategories;
        }

        public async Task<IEnumerable<Product>> GetProductsByCategory(int productCategoryId)
        {
            var productCategory = await _context.ProductCategories.Include(c => c.Products)
                .FirstOrDefaultAsync(c => c.Id == productCategoryId);
            return productCategory.Products;
        }

        public async Task<IEnumerable<Order>> GetOrders(int userId, OrderStatus? status)
        {
            var orders = await _context.Orders.Include(o => o.OrderItems).ThenInclude(item => item.Product)
                .Where(o => o.UserId == userId && (!status.HasValue || o.Status == status))
                .ToListAsync();
            return orders;
        }

        public async Task<Order> GetOrder(int orderId)
        {
            var order = await _context.Orders.Include(o => o.OrderItems).ThenInclude(item => item.Product)
                .FirstOrDefaultAsync(o => o.Id == orderId);
            return order;
        }

        public async Task<Order> CreateOrder(int orderId)
        {
            var newOrder = new Order()
            {
                DateCreated = DateTime.Now,
                DateUpdated = DateTime.Now,
                Status = OrderStatus.Open,
                OrderItems = new List<OrderItem>(),
                TotalAmount = 0,
                UserId = orderId
            };

            await _context.Orders.AddAsync(newOrder);
            await _context.SaveChangesAsync();
            return newOrder;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task UpdateActiveOrder(int userId, int orderId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId);
            user.LastOrder = orderId;
            await _context.SaveChangesAsync();
        }

        public async Task SaveProductInOrder(int orderId, int productId, double quantity)
        {
            var order = await _context.Orders
                .Include(o => o.OrderItems).ThenInclude(i => i.Product)
                .FirstAsync(x => x.Id == orderId);
            var product = await _context.Products.FirstAsync(x => x.Id == productId);

            var newOrderItem = order.OrderItems.FirstOrDefault(x => x.ProductId == productId);
            if (newOrderItem == null)
            {
                newOrderItem = new OrderItem()
                {
                    Quantity = quantity,
                    ProductId = product.Id,
                    OrderId = orderId
                };
                _context.OrderItems.Add(newOrderItem);
            }
            else
            {
                newOrderItem.Quantity = quantity;
            }

            // calculate order total
            var total = order.OrderItems.Sum(x => x.Quantity * x.Product.Price);
            order.TotalAmount = total;

            await _context.SaveChangesAsync();
        }
    }
}