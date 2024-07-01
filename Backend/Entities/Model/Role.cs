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
    public class Role : BaseEntity
    {        

        [Column("RoleName", TypeName ="varchar(50)")]
        public string roleName { get; set; }

        public User user { get; set; }
    }
}
