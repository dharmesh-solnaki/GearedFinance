using Entities.Models;
using Repository.Implementation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IUserRepo : IBaseRepo<User>
    {
        //Task<IEnumerable<User>> GetAllAsync(Expression<Func<Task, bool>> predicate, int pageNumber = 1, int pageSize = 10);
        //Task<IEnumerable<User>> GetAllAsync(int pageNumber = 1, int pageSize = 10);
    }
}
