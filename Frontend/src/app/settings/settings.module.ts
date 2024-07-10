import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { CommonSelectmenuComponent } from '../Shared/common-selectmenu/common-selectmenu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSiteUserComponent } from './user-management/add-site-user/add-site-user.component';
import { PhoneMaskingDirective } from '../Directives/phone-masking.directive';
import { CommonGridComponent } from '../Shared/common-grid/common-grid.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'user-management', component: UserManagementComponent },
      { path: 'user-management/add', component: AddSiteUserComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    UserManagementComponent,
    CommonSelectmenuComponent,
    AddSiteUserComponent,
    CommonGridComponent,
    PhoneMaskingDirective
  ],
  imports: [ReactiveFormsModule, RouterModule.forChild(routes), CommonModule,
    NgbPaginationModule,
  ],
  exports: [SettingsComponent, CommonSelectmenuComponent,
    PhoneMaskingDirective,CommonGridComponent
  ]
})
export class SettingsModule {}
