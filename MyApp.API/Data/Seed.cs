using System.Collections.Generic;
using MyApp.API.Models;
using Newtonsoft.Json;

namespace MyApp.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUsers()
        {
            // Seed Users
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.UserName = user.UserName.ToLower();
                _context.Users.Add(user);
            }
            _context.SaveChanges();

            // Seed Categories + Products
            var productsData = System.IO.File.ReadAllText("Data/ProductCategoriesSeedData.json");
            var productCategories = JsonConvert.DeserializeObject<List<ProductCategory>>(productsData);
            foreach (var category in productCategories)
            {
                _context.ProductCategories.Add(category);
            }
            _context.SaveChanges();

            // Seed Key Value
            var keysData = System.IO.File.ReadAllText("Data/KeyValueSeedData.json");
            var keys = JsonConvert.DeserializeObject<List<AppKeyValue>>(keysData);
            foreach (var key in keys)
            {
                _context.AppKeyValues.Add(key);
            }
            _context.SaveChanges();

            // seed orders put on bob (user id 1)
            var ordersData = System.IO.File.ReadAllText("Data/OrdersSeedData.json");
            var orders = JsonConvert.DeserializeObject<List<Order>>(ordersData);
            var user1 = _context.Users.Find(1);
            foreach (var order in orders)
            {
                int i=0;
                foreach (var item in order.OrderItems)
                {
                    i++;
                    var product1 = _context.Products.Find(i);
                    if (product1 == null)
                    {
                        item.Product = _context.Products.Find(1);
                    } else {
                        item.Product = product1;
                    }
                    
                }
                if (user1.Orders == null)
                {
                    user1.Orders = new List<Order>();    
                }
                user1.Orders.Add(order);
            }
            _context.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512()) 
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

    }
}