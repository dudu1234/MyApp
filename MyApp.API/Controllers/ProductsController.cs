using System.Collections.Generic;
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
    public class ProductsController : ControllerBase
    {
        private readonly IAppRepository _repo;
        private readonly IMapper _mapper;
        public ProductsController(IAppRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet("all")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _repo.GetProducts();

            var productsDto = _mapper.Map<IEnumerable<ProductDto>>(products);

            return Ok(productsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _repo.GetProduct(id);
            
            var productDto = _mapper.Map<ProductDto>(product);

            return Ok(productDto);
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetProductCategories()
        {
            var categories = await _repo.GetProductCategories();

            var categoriesDto = _mapper.Map<IEnumerable<ProductCategoryDto>>(categories);

            return Ok(categoriesDto);
        }

        [HttpGet("bycategory/{categoryId}")]
        public async Task<IActionResult> GetProductsByCategory(int categoryId)
        {
            var products = await _repo.GetProductsByCategory(categoryId);
            
            var productsDto = _mapper.Map<IEnumerable<ProductDto>>(products);

            return Ok(productsDto);
        }
    }
}