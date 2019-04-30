using System;
using System.IdentityModel.Tokens.Jwt;
using System.Web;
using System.Reflection;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyApp.API.Services;

namespace MyApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AwsController : ControllerBase
    {
        private readonly IAppAwsService _awsService;

        public AwsController(IAppAwsService awsService)
        {
            _awsService = awsService;
        }

        [HttpGet("GetBucketFiles/{bucketName}")]
        public async Task<IActionResult> GetBucketFiles(string bucketName)
        {
            try
            {
                return Ok(await _awsService.GetBucketFiles(bucketName));
            }
            catch
            {
                return NotFound();
            }
            
        }
    }
}