import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-selectmenu',
  templateUrl: './common-selectmenu.component.html',
})
export class CommonSelectmenuComponent implements OnInit  {
  @Input() optionData: { option: string; value: string | number }[] = [];
  @Input() defaultOption: string = '';
  selectedValue:string|number=''
  isMenuOpen:boolean=false;

  ngOnInit(): void {
      this.selectedValue=this.defaultOption
  }

  valueChangeHadler(changedValue: string | number) {
  this.selectedValue=changedValue;   
  this.isMenuOpen=!this.isMenuOpen
  }

  resetElement(){
    this.selectedValue=this.defaultOption 
  }
  menuToggler(){
    this.isMenuOpen=!this.isMenuOpen
  }
}
