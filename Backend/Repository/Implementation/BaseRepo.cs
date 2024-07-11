using Entities.DBContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task AddAsync(T item)
        {
             await _dbSet.AddAsync(item);
        }

        public async Task AddRangeAsync(IEnumerable<T> items)
        {
            await _dbSet.AddRangeAsync(items);
        }

        public  void Delete(T item)
        {
             _dbSet.Remove(item);
        }

        public void DeleteRange(IEnumerable<T> items)
        {
           _dbSet.RemoveRange(items);
        }


        public async void SaveChangesAsync()
        {
           await _context.SaveChangesAsync();
        }

        public  void UpdateAsync(T item)
        {
            _dbSet.Update(item);
      
        }

        public void UpdateRangeAsync(IEnumerable<T> items)
        {
            _dbSet.UpdateRange(items);
        }
    }
}
