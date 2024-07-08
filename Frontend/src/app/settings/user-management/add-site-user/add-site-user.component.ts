import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  dateSelectonMenu,
  monthSelectonMenu,
  notificationPreSelectionMenu,
  roleSelectionMenu,
  selectMenu,
  RoleEnum,
  vendorSelectionMenu,
  validationRegexes,
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
  addUserFrom: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) {
    this.formInitializer();
  }

  ngOnInit(): void {
    this.selectMenuRoles = roleSelectionMenu;
    this.selectMenuVendors = vendorSelectionMenu;
    this.selectMenuNotificationPref = notificationPreSelectionMenu;
    this.selectMenuMonth = monthSelectonMenu();
    this.selectMenuDate = dateSelectonMenu();
  }

  formInitializer() {
    this.addUserFrom = this._fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(validationRegexes.EMAIL_REGEX),
        ],
      ],
      password: [''],
      role: ['Select', Validators.required],
      vendor: ['Select', [Validators.required]],
      notificationPref: ['None', [Validators.required]],
      month: [''],
      day: [0],
      mobileNumber: ['', [Validators.required]],
      roleStatus: [true],
      portalLogin: [true],
      sendEOTreports: [true],
      vendorSalesRepList: [true],
      unassignedApplications: [true],
      funderProfile: [true],
      proceedBtnInApp: [false],
      clacRateEditor: [false],
      gearedSalesRepList: [false],
      vendorManagerLevel: ['Select'],
      reportTo: ['Select'],
      relationshipManager: ['Select'],
    });
  }

  isFieldVisible(field: string) {
    const role = this.addUserFrom.get('role')?.value;

    switch (field) {
      case 'password':
        return (
          role == RoleEnum.GearedAdmin ||
          role == RoleEnum.GearedSuperAdmin ||
          role == RoleEnum.VendorSalesRep
        )  &&   this.addUserFrom.get('portalLogin')?.value ;
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

  addUserFormHandler() {
    this.isFieldRequired();
    if (this.addUserFrom.invalid) {
      this.addUserFrom.markAllAsTouched();
      return;
    }

    console.log(this.addUserFrom.value);
  }

  hasError(field: string, error: string) {
    const control = this.addUserFrom.get(field);

    return control?.hasError(error) && control?.touched;
  }

  isFieldRequired() {
    const role = this.addUserFrom.get('role')?.value;

    if (role == 'Select') {
      this.addUserFrom.get('role')?.setErrors({ required: true });

      // this.addUserRoleSelection.isFieldRequired = true;
    } else {
      this.addUserFrom.get('role')?.setErrors({ required: false });

      // this.addUserRoleSelection.isFieldRequired = false;
    }

    if (
      this.addUserFrom.get('vendor')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserFrom.get('vendor')?.setErrors({ required: true });
      // this.addUserVendorSelection.isFieldRequired = true;
    } else {
      this.addUserFrom.get('vendor')?.setErrors({ required: false });
      // this.addUserVendorSelection.isFieldRequired = false;
    }

    if (
      this.addUserFrom.get('vendorManagerLevel')?.value == 'Select' &&
      role == RoleEnum.VendorManager
    ) {
      this.addUserFrom.get('vendorManagerLevel')?.setErrors({ required: true });
      // this.addUserVendorManagerLevelSelection.isFieldRequired = true;
    } else {
      this.addUserFrom
        .get('vendorManagerLevel')
        ?.setErrors({ required: false });
      // this.addUserVendorManagerLevelSelection.isFieldRequired = false;
    }

    if (
      this.addUserFrom.get('reportTo')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserFrom.get('reportTo')?.setErrors({ required: true });
      // this.addUserReportToSelection.isFieldRequired = true;
    } else {
      this.addUserFrom.get('reportTo')?.setErrors({ required: false });
      // this.addUserReportToSelection.isFieldRequired = false;
    }

    if (
      this.addUserFrom.get('relationshipManager')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserFrom
        .get('relationshipManager')
        ?.setErrors({ required: true });
      // this.addUserRelationshipManagerSelection.isFieldRequired = true;
    } else {
      this.addUserFrom
        .get('relationshipManager')
        ?.setErrors({ required: false });
      // this.addUserRelationshipManagerSelection.isFieldRequired = false;
    }
  }
}
