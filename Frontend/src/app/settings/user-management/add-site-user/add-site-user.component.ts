import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonSelectmenuComponent } from 'src/app/Shared/common-selectmenu/common-selectmenu.component';
import {
  dateSelectonMenu,
  monthSelectonMenu,
  notificationPreSelectionMenu,
  roleSelectionMenu,
  selectMenu,
  RoleEnum,
  vendorSelectionMenu,
} from 'src/app/Shared/constants.model';

@Component({
  selector: 'app-add-site-user',
  templateUrl: './add-site-user.component.html',
})
export class AddSiteUserComponent implements OnInit {
  selectMenuRoles: selectMenu[] = [];
  selectMenuVendors: selectMenu[] = [];
  selectMenuNotificationPref: selectMenu[] = [];
  selectMenuMonth: selectMenu[] = [];
  selectMenuDate: selectMenu[] = [];
  selectionVendors: string[] = [];
  @ViewChild('addUserRoleSelection')
  addUserRoleSelection!: CommonSelectmenuComponent;
  addUserFrom: FormGroup=new FormGroup({});

  constructor(private _fb: FormBuilder) {
    this.formInitializer()
  }

  ngOnInit(): void {
    this.selectMenuRoles = roleSelectionMenu;
    this.selectMenuVendors = vendorSelectionMenu;
    this.selectMenuNotificationPref = notificationPreSelectionMenu;
    this.selectMenuMonth = monthSelectonMenu();
    this.selectMenuDate = dateSelectonMenu();
  }
  
  formInitializer(){
    this.addUserFrom = this._fb.group({
      name: ['',[Validators.required]],
      surname: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[]],
      role: [''],
      vendor: [''],
      notificationPref: ['',[Validators.required]],
      month: [''],
      date: [''],
      mobileNumber: [''],
      roleStatus: ['inactive'], 
      portalLogin: ['active'],
      sendEOTreports: ['send'], 
      vendorSalesRepList: ['exclude'], 
      unassignedApplications: ['view'],
      funderProfile: ['viewOnly'],
      proceedBtnInApp: ['show'],
      clacRateEditor: ['show'],
      gearedSalesRepList: ['viewOnly'],
      vendorManagementLevel:[''],
      reportTo:[''],
      relationshipManager:['']
    });
  }

  isFieldVisible(field: string) {
    const role = this.addUserRoleSelection?.selectedValue;

    switch (field) {
      case 'password':
        return (
          role == RoleEnum.GearedAdmin ||
          role == RoleEnum.GearedSuperAdmin ||
          role == RoleEnum.VendorSalesRep
        );
      case 'vendor':
        return (
          role == RoleEnum.VendorSalesRep ||
          role == RoleEnum.VendorManager ||
          role == RoleEnum.VendorGuestUser
        );
      case 'reportTo':
        return (
          role == RoleEnum.VendorGuestUser ||
          role == RoleEnum.VendorManager ||
          role == RoleEnum.VendorSalesRep
        );

      case 'portalLogin':
        return role != RoleEnum.VendorGuestUser;

      case 'vendorManagerLevel':
        return role == RoleEnum.VendorManager;

      case 'relaionshipManager':
        return (
          role == RoleEnum.VendorSalesRep ||
          role == RoleEnum.VendorGuestUser ||
          role == RoleEnum.VendorManager
        );
      case 'birthDate':
        return (
          role == RoleEnum.VendorGuestUser ||
          role == RoleEnum.VendorManager ||
          role == RoleEnum.VendorSalesRep
        );

      //to show main fields
      case 'reports':
        return role == RoleEnum.GearedSalesRep;

      case 'roleOptions':
        return (
          role == RoleEnum.GearedSuperAdmin ||
          role == RoleEnum.GearedSalesRep ||
          role == RoleEnum.VendorManager
        );
      case 'roleOptionsGearedSalesRep':
        return role == RoleEnum.GearedSalesRep;

      case 'roleOptionsGearedVendorManager':
        return role == RoleEnum.VendorManager;

      case 'roleOptionsGearedSuperAdmin':
        return role == RoleEnum.GearedSuperAdmin;

      default:
        return true;
    }
  }

  addUserFormHandler(){
   console.log(this.addUserFrom.value)
  }
}
