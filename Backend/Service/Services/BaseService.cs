using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Implementation
{
    public class BaseService<T> : IBaseService<T> where T : class
    {  
        private readonly IBaseRepo<T> _repo;

        public BaseService(IBaseRepo<T> repo)
        {
            _repo = repo;
        }

        public async Task AddAsync(T item)
        {
           await _repo.AddAsync(item);
        }

        //public async Task AddRangeAsync(IEnumerable<T> items)
        //{
        //   await _repo.AddRangeAsync(items);
        //}

        public async Task Delete(T item)
        {
         await _repo.Delete(item);
        }

        //public async Task DeleteRange(IEnumerable<T> items)
        //{
        // await  _repo.DeleteRange(items);
        //}

        public async Task<IEnumerable<T>> GetAllAsync(Expression<Func<T, bool>> predicate, int pageNumber = 1, int pageSize = 10)
        {
          return  await _repo.GetAllAsync(predicate,pageNumber
              ,pageSize);
        }

        //public async Task<T> GetByIdAsync(int id)
        //{
        //    return await _repo.GetByIdAsync(id);
        //}

        public  async Task SaveChangesAsync()
        {
          await  _repo.SaveChangesAsync();
        }

        public async Task UpdateAsync(T item)
        {
         await _repo.UpdateAsync(item);
        }

        //public async Task UpdateRangeAsync(IEnumerable<T> items)
        //{
        //  await   _repo.UpdateRangeAsync(items);
        //}
    }
}
