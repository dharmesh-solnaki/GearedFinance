using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IBaseRepo<T> where T : class
    {
         Task< IEnumerable<T>> GetAllAsync(Expression<Func<T, bool>> predicate=null, int pageNumber=1, int pageSize=10);
        //Task<T> GetByIdAsync(int id);
        Task AddAsync(T item);
        //Task AddRangeAsync(IEnumerable<T> items);
        Task UpdateAsync(T item);
        //Task UpdateRangeAsync( IEnumerable<T> items);
        Task Delete(T item);
        //Task DeleteRange(IEnumerable<T> items);
        Task SaveChangesAsync();

    }
}
