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
    public class ManagerLevel :BaseEntity
    {
      
        [Column("MangerLevel", TypeName ="varchar(50)")]
        public string name { get; set; } =string.Empty;

        [Column("ManagerId")]
        [ForeignKey("Vendor")]
        public int vendorId { get; set; }

        public Vendor Vendor { get; set; }
    }
}
