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
  MonthEnum,
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
  defaultDateSelection: selectMenu[] = [];
  defaultMonthSelection: selectMenu[] = [];
  addUserForm: FormGroup = new FormGroup({});
  


  constructor(private _fb: FormBuilder) {
    this.formInitializer();
  }

  ngOnInit(): void {
    this.selectMenuRoles = roleSelectionMenu;
    this.selectMenuVendors = vendorSelectionMenu;
    this.selectMenuNotificationPref = notificationPreSelectionMenu;
    // this.selectMenuMonth = monthSelectonMenu(-1);
    // this.selectMenuDate = dateSelectonMenu(31);

    this.defaultDateSelection = dateSelectonMenu(31);
    this.defaultMonthSelection = monthSelectonMenu(-1);
    this.selectMenuMonth = this.defaultMonthSelection;
    this.selectMenuDate = this.defaultDateSelection;
    this.addFormBirthHandler();
  }

  addFormBirthHandler() {
     this.addUserForm.get('month')?.valueChanges.subscribe((selectedMonth) => {
      const daysInMonth = this.getDaysInMonth(selectedMonth);
      // const tempdata:selectMenu[]=[]

      // this.addUserDaySelection.updateTheOptionData(tempdata)
      this.selectMenuDate = this.defaultDateSelection.filter(
        (x) => Number(x.value) <= daysInMonth
      );
    });

    this.addUserForm.get('day')?.valueChanges.subscribe((selectedDay) => {

      this.updateMonthSelection(selectedDay);
    });
  }

  formInitializer() {
    this.addUserForm = this._fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(validationRegexes.EMAIL_REGEX),
        ],
      ],
      password: ['', [Validators.pattern(validationRegexes.PASSWORD_REGEX)]],
      role: ['Select', Validators.required],
      vendor: ['Select', [Validators.required]],
      notificationPref: ['None', [Validators.required]],
      month: [0],
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

  getDaysInMonth(month: number): number {
    switch (month) {
      case MonthEnum.Feb:
        return this.isLeapYear(new Date().getFullYear()) ? 29 : 28;
      case MonthEnum.Apr:
      case MonthEnum.Jun:
      case MonthEnum.Sep:
      case MonthEnum.Nov:
        return 30;
      default:
        return 31;
    }
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  updateDateSelection(daysInMonth: number) {
    if (daysInMonth === -1) {
      this.selectMenuDate = this.defaultDateSelection;
    } else {
      this.selectMenuDate = this.selectMenuDate.filter(
        (x) => +x.value <= daysInMonth
      );
    }
  }

  updateMonthSelection(selectedDay: number) {
    if (selectedDay > 0 ) {
      const validMonths = this.defaultMonthSelection.filter((month) => {
        const daysInMonth = this.getDaysInMonth(+month.value);
        return selectedDay <= daysInMonth;
      });
      this.selectMenuMonth = validMonths;
    } else {
      this.selectMenuMonth = this.defaultMonthSelection;
    }
    console.log(this.selectMenuMonth)
  }

  isFieldVisible(field: string) {
    const role = this.addUserForm.get('role')?.value;

    switch (field) {
      case 'password':
        return (
          (role == RoleEnum.GearedAdmin ||
            role == RoleEnum.GearedSuperAdmin ||
            role == RoleEnum.GearedSalesRep) &&
          this.addUserForm.get('portalLogin')?.value
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

  addUserFormHandler() {
    this.isFieldRequired();
    if (this.addUserForm.invalid) {
      this.addUserForm.markAllAsTouched();
      return;
    }

    console.log(this.addUserForm.value);
  }

  hasError(field: string, error: string) {
    const control = this.addUserForm.get(field);

    return control?.hasError(error) && control?.touched;
  }

  roleStatusChangeHandler(){
    
    if(this.addUserForm.get('roleStatus')?.value){
      this.addUserForm.controls['portalLogin'].setValue(false)
    }
  }
  isFieldRequired() {
    const role = this.addUserForm.get('role')?.value;

    if (role == 'Select') {
      this.addUserForm.get('role')?.setErrors({ required: true });

      // this.addUserRoleSelection.isFieldRequired = true;
    } else {
      this.addUserForm.get('role')?.setErrors({ required: false });

      // this.addUserRoleSelection.isFieldRequired = false;
    }

    if (
      this.addUserForm.get('vendor')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserForm.get('vendor')?.setErrors({ required: true });
      // this.addUserVendorSelection.isFieldRequired = true;
    } else {
      this.addUserForm.get('vendor')?.setErrors({ required: false });
      // this.addUserVendorSelection.isFieldRequired = false;
    }

    if (
      this.addUserForm.get('vendorManagerLevel')?.value == 'Select' &&
      role == RoleEnum.VendorManager
    ) {
      this.addUserForm.get('vendorManagerLevel')?.setErrors({ required: true });
      // this.addUserVendorManagerLevelSelection.isFieldRequired = true;
    } else {
      this.addUserForm
        .get('vendorManagerLevel')
        ?.setErrors({ required: false });
      // this.addUserVendorManagerLevelSelection.isFieldRequired = false;
    }

    if (
      this.addUserForm.get('reportTo')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserForm.get('reportTo')?.setErrors({ required: true });
      // this.addUserReportToSelection.isFieldRequired = true;
    } else {
      this.addUserForm.get('reportTo')?.setErrors({ required: false });
      // this.addUserReportToSelection.isFieldRequired = false;
    }

    if (
      this.addUserForm.get('relationshipManager')?.value == 'Select' &&
      (role == RoleEnum.VendorSalesRep ||
        role == RoleEnum.VendorManager ||
        role == RoleEnum.VendorGuestUser)
    ) {
      this.addUserForm
        .get('relationshipManager')
        ?.setErrors({ required: true });
      // this.addUserRelationshipManagerSelection.isFieldRequired = true;
    } else {
      this.addUserForm
        .get('relationshipManager')
        ?.setErrors({ required: false });
      // this.addUserRelationshipManagerSelection.isFieldRequired = false;
    }

    if( this.addUserForm.get('day')?.value == 0 && role == RoleEnum.VendorSalesRep ||
    role == RoleEnum.VendorManager ||
    role == RoleEnum.VendorGuestUser ){
      this.addUserForm
      .get('day')
      ?.setErrors({ required: true });
    }else{
      this.addUserForm
      .get('day')
      ?.setErrors({ required: false });
    }  
     if( this.addUserForm.get('month')?.value == 0 && role == RoleEnum.VendorSalesRep ||
    role == RoleEnum.VendorManager ||
    role == RoleEnum.VendorGuestUser ){
      this.addUserForm
      .get('month')
      ?.setErrors({ required: true });
    }else{
      this.addUserForm
      .get('month')
      ?.setErrors({ required: false });
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
