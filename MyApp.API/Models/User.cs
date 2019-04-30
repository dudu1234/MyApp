using System;
using System.Collections.Generic;
using MyApp.API.Common;

namespace MyApp.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public UserType UserType { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public Gender Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<Order> Orders { get; set; }
        public int? LastOrder { get; set; }
    }
}