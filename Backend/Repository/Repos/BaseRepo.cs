using Entities.DBContext;
using Microsoft.EntityFrameworkCore;

using Repository.Interface;
using System.Linq.Expressions;

namespace Repository.Implementation
{
    public class BaseRepo<T> : IBaseRepo<T> where T : class
    {
        private readonly ApplicationDBContext _context;
        private readonly DbSet<T> _dbSet;

        public BaseRepo(ApplicationDBContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public async virtual Task<IEnumerable<T>> GetAllAsync(Expression<Func<T,bool>> predicate, int pageNumber=1,int pageSize=10)
        {
             IQueryable<T> query = _dbSet;

            try
            {
                if (predicate != null)
                {
                    query = query.Where(predicate);
                }
                return await query.Skip((pageNumber-1)*pageSize).Take(pageSize).ToListAsync();
            }
            catch
            {
                throw;
            }
           
        }

        //public async Task<T> GetByIdAsync(int id)
        //{
        //    return await _dbSet.FindAsync(id);
        //}

        public async Task AddAsync(T item)
        {
            try
            {
                await _dbSet.AddAsync(item);
                await SaveChangesAsync();
            }
            catch
            {
                throw;
            }
             
    
        }

        //public async Task AddRangeAsync(IEnumerable<T> items)
        //{
        //    await _dbSet.AddRangeAsync(items);        
          
        //}

        public  async Task Delete(T item)
        {
            try
            {
                _dbSet.Remove(item);
                await SaveChangesAsync();
            }
            catch
            {
                throw;
            }
            
        }

        //public async Task DeleteRange(IEnumerable<T> items) 
        //{
        //   _dbSet.RemoveRange(items);
        //    await SaveChangesAsync();
        //}


        public async Task SaveChangesAsync()
        {
           await _context.SaveChangesAsync();
        }

        public  async Task UpdateAsync(T item)
        {
            try
            {
                _dbSet.Update(item);
                await SaveChangesAsync();
            }
            catch
            {
                throw;
            }
            
        }

        //public async Task UpdateRangeAsync(IEnumerable<T> items)
        //{
        //    _dbSet.UpdateRange(items);
        //    await SaveChangesAsync();
        //}
    }
}
