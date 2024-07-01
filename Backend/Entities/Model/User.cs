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
    public class User :BaseEntity
    {

        [Required]
        [Column("Name",TypeName ="varchar(50)")]
        public string name { get; set; } = string.Empty;
        [Required]
        [Column("SurName", TypeName = "varchar(50)")]
        public string surName { get; set; } =string.Empty;

        [Required]
        [Column("Email", TypeName = "varchar(100)")]
        public string email { get; set; } = string.Empty;
        [Required]
        [Column("Mobile")]
        [MaxLength(10)]
        public int mobile { get; set; }

        [Column("Password", TypeName ="varchar(50)")]
        public string? password { get; set; }


        [Column("NotificationPreferences")]
        [MaxLength(1)]
        public int notificationPreference { get; set; }

        [Column("Status",TypeName ="boolean")]
        public bool status { get; set; } = false;

        [Column("PortalLogin", TypeName = "boolean")]
        public bool? portalLogin { get; set; } = false;

        [Column("IncludeUser", TypeName ="boolean")]
        public bool? incudeUser { get; set; } = false;
  

        [Column("DayOfBirth")]
        public int dayOfBirth { get; set; }

        [Column("MonthOfBirth", TypeName = "varchar(10)")]
        public string monthOfBirth { get; set; } = string.Empty;

        [Column("RelationshipManager")]
        public int relationshipManager { get; set; }

        [Column("ReportingTo")]
        public int reportingTo { get; set; }

        [Column("ExcludeFronVendorSalesPerList")]
        public bool? excludeVendorSalesList { get; set; }

        [Column("UnassignedApplications")]
        public bool? unassignedApplications { get; set; }

        [ForeignKey("role")]
        [Column("Role")]
        public int roleId { get; set; }
        public Role role { get; set; }

        [ForeignKey("Vendor")]
        [Column("VendorId")]
        public int vendorId { get; set; }

        public Vendor Vendor { get; set; }

    }
}
