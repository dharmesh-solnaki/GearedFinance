using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Implementation
{
    public class Sevice :IService
    {

        private readonly IRepo _repo;
        public Sevice(IRepo repo)
        {
               _repo = repo;
        }
    }
}
