import {  Component,   OnInit,  ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonSelectmenuComponent } from 'src/app/Shared/common-selectmenu/common-selectmenu.component';
import { selectionRoles } from 'src/app/Shared/constants.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  // styleUrls:['../../../assets/Styles/appStyle.css']
})
export class UserManagementComponent implements OnInit {
  selectMenuRoles: { option: string; value: string }[] = [];

  userHeaderSearchForm:FormGroup


 @ViewChild('roleSelectionMenu') roleSelectionMenu!: CommonSelectmenuComponent;
  constructor(private _fb:FormBuilder) {
    this.userHeaderSearchForm = this._fb.group({
      searchString:[''],
      selectedRole:['']
    })
    
  }

  ngOnInit() {
    this.selectMenuRoles = [   
    ];
  }
  

  // selectMenuValue(value:string|number){

  // this.userHeaderSearchForm.controls['selectedRole'].setValue(value)
  // }
  handleFormSubmit(){
  const selectedRole =   this.roleSelectionMenu.selectedValue
  this.userHeaderSearchForm.controls['selectedRole'].setValue(selectedRole)
 console.log(this.userHeaderSearchForm.value)
  }
  resetForm(){
    this.userHeaderSearchForm.reset()
  this.roleSelectionMenu.resetElement()
  }

}
