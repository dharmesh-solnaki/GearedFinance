using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IBaseRepo<T> where T : class
    {
        Task< IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);

        Task AddAsync(T item);
        Task AddRangeAsync(IEnumerable<T> items);


        void UpdateAsync(T item);
        void UpdateRangeAsync( IEnumerable<T> items);


        void Delete(T item);
        void DeleteRange(IEnumerable<T> items);

        void SaveChangesAsync();

    }
}
