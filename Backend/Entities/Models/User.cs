﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Entities.Models;

[Index("RoleId", Name = "IX_Users_Role", IsUnique = true)]
[Index("VendorId", Name = "IX_Users_VendorId", IsUnique = true)]
public partial class User
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    public string SurName { get; set; } = null!;

    [StringLength(100)]
    public string Email { get; set; } = null!;

    public int Mobile { get; set; }

    [StringLength(50)]
    public string? Password { get; set; }

    public int NotificationPreferences { get; set; }

    [Required]
    public bool? Status { get; set; }

    public bool? IsPortalLogin { get; set; }

    [Column("IsUserInGAFSalesRepList")]
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

    [ForeignKey("RoleId")]
    [InverseProperty("User")]
    public virtual Role Role { get; set; } = null!;

    [ForeignKey("VendorId")]
    [InverseProperty("User")]
    public virtual Vendor? Vendor { get; set; }
}
