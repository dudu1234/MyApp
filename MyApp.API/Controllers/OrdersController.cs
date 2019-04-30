using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyApp.API.Common;
using MyApp.API.Data;
using MyApp.API.Dtos;
using MyApp.API.Models;

namespace MyApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IAppRepository _repo;
        private readonly IMapper _mapper;
        public OrdersController(IAppRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrder(int orderId)
        {
            var order = await _repo.GetOrder(orderId);

            var orderDto = _mapper.Map<OrderDetailsDto>(order);

            return Ok(orderDto);
        }

        [HttpGet("GetUserOrders/{orderStatus?}")]
        public async Task<IActionResult> GetOrders(OrderStatus? orderStatus = null)
        {
            var userId = Int32.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            var orders = await _repo.GetOrders(userId, orderStatus);
            
            var ordersDto = _mapper.Map<IEnumerable<OrderDto>>(orders);

            return Ok(ordersDto);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create()
        {
            var userId = Int32.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var newOrder = await _repo.CreateOrder(userId);
            await _repo.UpdateActiveOrder(userId, newOrder.Id);
            var orderDto = _mapper.Map<OrderDto>(newOrder);
            return Ok(orderDto);
        }

        [HttpPost("SaveProductInOrder")]
        public async Task<IActionResult> SaveProductInOrder(AddProductToOrderDto dto)
        {
            var userId = Int32.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            await _repo.SaveProductInOrder(dto.OrderId, dto.ProductId, dto.Quantity);
            return Ok(true);
        }
    }
}