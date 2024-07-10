import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IGridSettings,
  PaginationSetting,
  SortConfiguration,
  SortOrder,
  dummyColumnGridSetting,
  dummyDataGeneration,
} from 'src/app/Shared/common-grid/common-grid.model';
import { CommonSelectmenuComponent } from 'src/app/Shared/common-selectmenu/common-selectmenu.component';
import { roleSelectionMenu } from 'src/app/Shared/constants.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  // styleUrls:['../../../assets/Styles/appStyle.css']
})
export class UserManagementComponent implements OnInit {
  selectMenuRoles: { option: string; value: string }[] = [];
  userData: any[] = [];
  gridSetting!: IGridSettings;
  paginationSettings!: PaginationSetting;
  userHeaderSearchForm: FormGroup;
  defaultUserData: any[] = [];
  
  @ViewChild('roleSelectionMenu') roleSelectionMenu!: CommonSelectmenuComponent;

  constructor(private _fb: FormBuilder) {
    this.userHeaderSearchForm = this._fb.group({
      searchString: [''],
      selectedRole: [''],
    });
  }

  ngOnInit() {
    this.selectMenuRoles = roleSelectionMenu;
    this.userData = dummyDataGeneration();
    this.defaultUserData = dummyDataGeneration();
    this.gridSetting = dummyColumnGridSetting;
    this.paginationSetter();
  }

  paginationSetter() {
    this.paginationSettings = {
      totalRecords: this.userData.length,
      currentPage: 1,
      selectedPageSize: ['25 pre page', '50 per page', '100 per page'],
    };
  }

  // selectMenuValue(value:string|number){

  // this.userHeaderSearchForm.controls['selectedRole'].setValue(value)
  // }
  searchHandler() {
    console.log(this.userHeaderSearchForm.value);
    const searchString: string =
      this.userHeaderSearchForm.get('searchString')?.value;

    const selectedRole: string =
      this.userHeaderSearchForm.get('selectedRole')?.value;
    this.userData = this.defaultUserData;

    if (searchString && searchString.length > 0) {
      this.userData = this.userData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString.trim().toLowerCase())
      );
      this.userData = this.userData.slice();
    }
    if (selectedRole && selectedRole.length > 0) {
      this.userData = this.userData.filter((item: any) =>
        item.role.toLowerCase().includes(selectedRole.toLowerCase())
      );
    }
    this.paginationSetter();
  }
  resetForm() {
    this.userData = this.defaultUserData;
    this.userHeaderSearchForm.reset();
    this.roleSelectionMenu.resetElement();
    this.paginationSetter();
  }
  sortHandler(ev: SortConfiguration) {
    const { sort, sortOrder } = ev;
    this.userData = this.userData.sort((a, b) => {
      if (a[sort] > b[sort]) {
        return sortOrder === SortOrder.ASC ? 1 : -1;
      } else if (a[sort] < b[sort]) {
        return sortOrder === SortOrder.ASC ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
}
