using Entities.DataModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Vendor : BaseEntity
    {
   

        [Column("Name",TypeName ="varchar(100)")]
        public string name { get; set; } =string.Empty;     


        public User user { get; set; }

        public ICollection<ManagerLevel> managerLevels { get; set; }

      
    }
}
