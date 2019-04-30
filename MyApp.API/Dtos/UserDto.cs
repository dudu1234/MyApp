using System;

namespace MyApp.API.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastActive { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int? LastOrder { get; set; }
    }
}