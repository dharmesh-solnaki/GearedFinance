using Entities.DTOs;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interface
{
    public interface IUserService : IBaseService<User>
    {
        Task<IEnumerable<UserDTO>> GetAllUsersAsync(string name, string roleName, int pageNumber, int pageSize);
        Task AddUserAsync(UserDTO model);
    }
}
