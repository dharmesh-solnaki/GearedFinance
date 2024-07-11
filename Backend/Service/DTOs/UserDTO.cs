using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs
{
    public class UserDTO
    {
    
        public int Id { get; set; }

       
        public string Name { get; set; } = null!;

        public string SurName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public int Mobile { get; set; }

        public string? Password { get; set; }

        public int NotificationPreferences { get; set; }

        public bool? Status { get; set; }

        public bool? IsPortalLogin { get; set; }


        public bool? IsUserInGafsalesRepList { get; set; }

        public int DayOfBirth { get; set; }

        public int MonthOfBirth { get; set; }

        public int RelationshipManager { get; set; }

        public int ReportingTo { get; set; }

        public bool? IsUserInVendorSalesRepList { get; set; }

        public bool? UnassignedApplications { get; set; }

        public int RoleId { get; set; }

        public int? VendorId { get; set; }

        public bool? IsSendEndOfTermReport { get; set; }

        public bool? IsFunderProfile { get; set; }

        public bool? IsProceedBtnInApp { get; set; }

        public bool? IsCalcRateEditor { get; set; }
    }
}
