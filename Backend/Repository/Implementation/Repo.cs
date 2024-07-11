
using Entities.DBContext;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementation
{
    public class Repo : IRepo
    {
        private ApplicationDBContext _db;
        public Repo(ApplicationDBContext db)
        {
            _db = db;
        }

        
    }
}
