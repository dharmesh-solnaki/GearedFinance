import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonSelectmenuComponent } from 'src/app/Shared/common-selectmenu/common-selectmenu.component';
import { dateSelectonMenu, monthSelectonMenu, notificationPreSelectionMenu, roleSelectionMenu, selectMenu, selectionRoles, vendorSelectionMenu } from 'src/app/Shared/constants.model';

@Component({
  selector: 'app-add-site-user',
  templateUrl: './add-site-user.component.html',
})
export class AddSiteUserComponent implements OnInit {
  selectMenuRoles: selectMenu[] = [];
  selectMenuVendors: selectMenu[] = [];
  selectMenuNotificationPref:selectMenu[]=[];
  selectMenuMonth:selectMenu[]=[];
  selectMenuDate:selectMenu[]=[];
  selectionVendors: string[] = [];
  @ViewChild('addUserRoleSelection')
  addUserRoleSelection!: CommonSelectmenuComponent;
  addUserFrom: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.addUserFrom = this._fb.group({
      name: [''],
      surname: [''],
      role: [''],
    });
  }

  ngOnInit(): void {
    this.selectMenuRoles = roleSelectionMenu;
    this.selectMenuVendors = vendorSelectionMenu;
    this.selectMenuNotificationPref=notificationPreSelectionMenu;
    this.selectMenuMonth=monthSelectonMenu;
    this.selectMenuDate=dateSelectonMenu();
  }
}
