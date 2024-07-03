import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { CommonSelectmenuComponent } from '../Shared/common-selectmenu/common-selectmenu.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes :Routes=[
  {path:'',component:SettingsComponent},
  {path:'user-management', component: UserManagementComponent}
]

@NgModule({
  declarations: [
    SettingsComponent,
    UserManagementComponent,
    CommonSelectmenuComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,    
  ],
  exports:[
    SettingsComponent,
    CommonSelectmenuComponent
  ]
})
export class SettingsModule { }
