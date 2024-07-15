using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interface
{
    public interface IBaseService<T> where T : class
    {
        public Task<IEnumerable<T>> GetAllAsync(Expression<Func<T, bool>> predicate, int pageNumber , int pageSize);
        //public Task<T> GetByIdAsync(int id);

        public Task AddAsync(T item);
        //public Task AddRangeAsync(IEnumerable<T> items);


        public Task UpdateAsync(T item);
        //public Task UpdateRangeAsync(IEnumerable<T> items);


       public Task Delete(T item);
       //public Task DeleteRange(IEnumerable<T> items);

       public  Task SaveChangesAsync();
    }
}
