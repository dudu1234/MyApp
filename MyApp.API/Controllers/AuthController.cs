using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyApp.API.Data;
using MyApp.API.Dtos;
using MyApp.API.Models;

namespace MyApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto dto)
        {
            dto.UserName = dto.UserName.ToLower();
            if (await _repo.UserExists(dto.UserName))
            {
                return BadRequest("Username already exists");
            }

            var userToCreate = new User
            {
                UserName = dto.UserName
            };

            var createdUser = await _repo.Register(userToCreate, dto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto dto)
        {
            var user = await _repo.Login(dto.UserName.ToLower(), dto.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var sessionTimeout = DateTime.Now.AddMinutes(int.Parse(_config.GetSection("AppSettings:SessionTimeoutInMinutes").Value));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = sessionTimeout,
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}