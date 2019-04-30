using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyApp.API.Data;
using MyApp.API.Dtos;

namespace MyApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAppRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IAppRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersDto = _mapper.Map<IEnumerable<UserDto>>(users);

            return Ok(usersDto);
        }

        [HttpGet("Current")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var userId = Int32.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            var user = await _repo.GetUser(userId);
            
            var userDto = _mapper.Map<UserDetailsDto>(user);

            return Ok(userDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserDetailsDto userDto)
        {
            var userId = Int32.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            if (userId != userDto.Id)
                return Unauthorized();
            
            var user = await _repo.GetUser(userId);

            // Update rlevant members
            user.Email = userDto.Email;
            //user.Gender = userDto.Gender;
            user.Phone = userDto.Phone;
            user.Address = userDto.Address;
            user.City = userDto.City;
            user.Country = userDto.Country;
            
            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception($"Update user {id} failed on save");
        }
    }
}