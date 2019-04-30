using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApp.API.Data;

namespace MyApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AppKeyValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public AppKeyValuesController(DataContext context)
        {
            _context = context;

        }
        // GET api/AppKeyValues
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var values = await _context.AppKeyValues.ToListAsync();
            return Ok(values);
        }

        // GET api/AppKeyValues/gender
        [HttpGet("{category}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByCategory(string category)
        {
            var values = await _context.AppKeyValues.Where(x => x.Category == category).ToListAsync();
            return Ok(values);
        }
    }
}
