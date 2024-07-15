using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace Entities.DTOs
{
    public class UserDTO

    {

        //public int Id { get; set; }


        [StringLength(50)]
        public string Name { get; set; } = null!;

        [StringLength(50)]
        public string SurName { get; set; } = null!;

        [StringLength(100)]
        public string Email { get; set; } = null!;

        [StringLength(10)]
        public string Mobile { get; set; } = null!;

        [StringLength(128)]
        public string? Password { get; set; }

        public int NotificationPreferences { get; set; }

        [Required]
        public bool? Status { get; set; }

        public bool? IsPortalLogin { get; set; }


        public bool? IsUserInGafsalesRepList { get; set; }

        public int? DayOfBirth { get; set; }

        public int? MonthOfBirth { get; set; }

        public int? RelationshipManager { get; set; }

        public int? ReportingTo { get; set; }

        public bool? IsUserInVendorSalesRepList { get; set; }

        public bool? UnassignedApplications { get; set; }

        public string? RoleName { get; set; }

        public bool? IsSendEndOfTermReport { get; set; }

        public bool? IsFunderProfile { get; set; }

        public bool? IsProceedBtnInApp { get; set; }

        public bool? IsCalcRateEditor { get; set; }
    }
}
