using AutoMapper;
using Entities.DTOs;
using Entities.Enums;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using System.Globalization;

namespace Geared_Finance_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _Service;

        public UserController(IUserService Service)
        {
            _Service = Service;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll( string? name,  string? roleName,  int pageNumber, int pageSize)
        {
            IEnumerable<UserDTO> userData = await _Service.GetAllUsersAsync( name,  roleName,  pageNumber, pageSize);
            if (!userData.Any())
            {
                return NotFound();
            }
            return Ok(userData);
        }
        [HttpPost]
        public async Task<IActionResult> AddUser(UserDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _Service.AddUserAsync(model);
            return Ok();

        }
    
     
    }
}
