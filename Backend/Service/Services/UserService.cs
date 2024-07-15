using AutoMapper;
using Entities.DTOs;
using Entities.Models;
using Geared_Finance_API;
using Repository.Interface;
using Service.Interface;
using System;
using System.Linq.Expressions;

namespace Service.Implementation
{
    public class UserService : BaseService<User>, IUserService
    {


        private readonly IMapper _mapper;
        //private readonly IBaseService<User> _Service;

        //public UserService( IBaseService<User> service, IMapper mapper)   
        //{
        //    _Service = service;
        //}
        private readonly IUserRepo _UserRepo;
        public UserService(IBaseRepo<User> repo, IUserRepo userRepo, IMapper mapper) : base(repo)
        {
            _UserRepo = userRepo;
            _mapper = mapper;
        }

        public async Task AddUserAsync(UserDTO model)
        {
            //User user = _mapper.Map<User>(model);
            User user = _mapper.MapTo<User>(model);
            await AddAsync(user);

        }

        public async Task<IEnumerable<UserDTO>> GetAllUsersAsync(string name, string roleName, int pageNumber, int pageSize)
        {
            Expression<Func<User, bool>> predicate=null;

            //if (!string.IsNullOrWhiteSpace(name))
            //{
            //    predicate =  user => user.Name.ToLower().Contains(name.Trim().ToLower()) || user.SurName.ToLower().Contains(name.Trim().ToLower());
            //}
            //if (!string.IsNullOrWhiteSpace(roleName))
            //{
            //}

            predicate = x => ( !string.IsNullOrWhiteSpace(name) && ( x.Name.ToLower().Contains(name.Trim().ToLower()) || x.SurName.ToLower().Contains(name.Trim().ToLower()))) ||
            (!string.IsNullOrWhiteSpace(roleName) && x.Role.RoleName.ToLower().Contains(roleName.Replace(" ", "").Trim().ToLower()));

            IEnumerable<User> users = await _UserRepo.GetAllAsync(predicate,pageNumber,pageSize);
            //var data = _mapper.Map<IEnumerable<UserDTO>>(users);
            IEnumerable<UserDTO> data = _mapper.MapToList<UserDTO>(users);
            return data;
        }
    }
}
