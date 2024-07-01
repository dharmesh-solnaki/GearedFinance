﻿// <auto-generated />
using System;
using Entities.DBContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Entities.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Entities.Model.ManagerLevel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("Id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("varchar(50)")
                        .HasColumnName("MangerLevel");

                    b.Property<int>("vendorId")
                        .HasColumnType("integer")
                        .HasColumnName("ManagerId");

                    b.HasKey("Id");

                    b.HasIndex("vendorId");

                    b.ToTable("ManagerLevels");
                });

            modelBuilder.Entity("Entities.Model.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("Id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("roleName")
                        .IsRequired()
                        .HasColumnType("varchar(50)")
                        .HasColumnName("RoleName");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Entities.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("Id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("dayOfBirth")
                        .HasColumnType("integer")
                        .HasColumnName("DayOfBirth");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Email");

                    b.Property<bool?>("excludeVendorSalesList")
                        .HasColumnType("boolean")
                        .HasColumnName("ExcludeFronVendorSalesPerList");

                    b.Property<bool?>("incudeUser")
                        .HasColumnType("boolean")
                        .HasColumnName("IncludeUser");

                    b.Property<int>("mobile")
                        .HasMaxLength(10)
                        .HasColumnType("integer")
                        .HasColumnName("Mobile");

                    b.Property<string>("monthOfBirth")
                        .IsRequired()
                        .HasColumnType("varchar(10)")
                        .HasColumnName("MonthOfBirth");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("varchar(50)")
                        .HasColumnName("Name");

                    b.Property<int>("notificationPreference")
                        .HasMaxLength(1)
                        .HasColumnType("integer")
                        .HasColumnName("NotificationPreferences");

                    b.Property<string>("password")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("Password");

                    b.Property<bool?>("portalLogin")
                        .HasColumnType("boolean")
                        .HasColumnName("PortalLogin");

                    b.Property<int>("relationshipManager")
                        .HasColumnType("integer")
                        .HasColumnName("RelationshipManager");

                    b.Property<int>("reportingTo")
                        .HasColumnType("integer")
                        .HasColumnName("ReportingTo");

                    b.Property<int>("roleId")
                        .HasColumnType("integer")
                        .HasColumnName("Role");

                    b.Property<bool>("status")
                        .HasColumnType("boolean")
                        .HasColumnName("Status");

                    b.Property<string>("surName")
                        .IsRequired()
                        .HasColumnType("varchar(50)")
                        .HasColumnName("SurName");

                    b.Property<bool?>("unassignedApplications")
                        .HasColumnType("boolean")
                        .HasColumnName("UnassignedApplications");

                    b.Property<int>("vendorId")
                        .HasColumnType("integer")
                        .HasColumnName("VendorId");

                    b.HasKey("Id");

                    b.HasIndex("roleId")
                        .IsUnique();

                    b.HasIndex("vendorId")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Entities.Model.Vendor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("Id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Name");

                    b.HasKey("Id");

                    b.ToTable("Vendors", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            name = "Vendor A"
                        },
                        new
                        {
                            Id = 2,
                            name = "Vendor B"
                        },
                        new
                        {
                            Id = 3,
                            name = "Vendor C"
                        });
                });

            modelBuilder.Entity("Entities.Model.ManagerLevel", b =>
                {
                    b.HasOne("Entities.Model.Vendor", "Vendor")
                        .WithMany("managerLevels")
                        .HasForeignKey("vendorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Vendor");
                });

            modelBuilder.Entity("Entities.Model.User", b =>
                {
                    b.HasOne("Entities.Model.Role", "role")
                        .WithOne("user")
                        .HasForeignKey("Entities.Model.User", "roleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.Vendor", "Vendor")
                        .WithOne("user")
                        .HasForeignKey("Entities.Model.User", "vendorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Vendor");

                    b.Navigation("role");
                });

            modelBuilder.Entity("Entities.Model.Role", b =>
                {
                    b.Navigation("user")
                        .IsRequired();
                });

            modelBuilder.Entity("Entities.Model.Vendor", b =>
                {
                    b.Navigation("managerLevels");

                    b.Navigation("user")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
