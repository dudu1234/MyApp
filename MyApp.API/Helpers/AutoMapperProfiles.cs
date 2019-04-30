using System.Linq;
using AutoMapper;
using MyApp.API.Dtos;
using MyApp.API.Models;

namespace MyApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom((s,d) => s.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserDetailsDto>()
                //.ForMember(dest => dest.PhotoUrl, opt => {
                //    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                //})
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom((s,d) => s.DateOfBirth.CalculateAge());
                });
            CreateMap<Product, ProductDto>();
            CreateMap<ProductCategory, ProductCategoryDto>();
            CreateMap<Order, OrderDto>();
            CreateMap<Order, OrderDetailsDto>();
            CreateMap<OrderItem, OrderItemDto>();
        }
    }
}