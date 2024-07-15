
using Entities.DBContext;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Interface;
using System.Collections.Immutable;
using System.Linq;
using System.Linq.Expressions;

namespace Repository.Implementation
{
    public class UserRepo : BaseRepo<User>, IUserRepo
    {
        private ApplicationDBContext _db;
        public UserRepo(ApplicationDBContext db) : base(db)
        {
            _db = db;
        }

        //public override  async Task<IEnumerable<User>> GetAllAsync( Expression<Func<User,bool>> predicate = null, int pageNumber = 1, int pageSize = 10)
        //{

        //    try
        //    {
        //        IEnumerable<User> query = _db.Users;

        //        if (predicate != null)
        //        {
        //            query = query.Where(predicate);
        //        }
        //        return await _db.Users.Include(x=>x.Role).Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        //    }
        //    catch
        //    {
        //        throw;
        //    }

        //}




    }
}
