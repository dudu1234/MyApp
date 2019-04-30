using System.Collections.Generic;
using System.Threading.Tasks;
using MyApp.API.Common;
using MyApp.API.Models;

namespace MyApp.API.Data
{
    public interface IAppRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int userId);
         Task<IEnumerable<Product>> GetProducts();
         Task<Product> GetProduct(int productId);
         Task<IEnumerable<ProductCategory>> GetProductCategories();
         Task<IEnumerable<Product>> GetProductsByCategory(int productCategoryId);
         Task<IEnumerable<Order>> GetOrders(int userId, OrderStatus? status);
         Task<Order> GetOrder(int orderId);
         Task<Order> CreateOrder(int userId);
         Task UpdateActiveOrder(int userId, int orderId);
         Task SaveProductInOrder(int orderId, int productId, double quantity);
    }
}