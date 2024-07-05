import { Component, Input, OnInit } from '@angular/core';
import { selectMenu } from '../constants.model';

@Component({
  selector: 'app-common-selectmenu',
  templateUrl: './common-selectmenu.component.html',
})
export class CommonSelectmenuComponent implements OnInit {
  @Input() optionData: selectMenu[] = [];
  @Input() defaultOption: string = '';
  @Input() needsSearching: boolean = false;
  selectedValue: string | number = '';
  selectedOption: string | number = '';
  isMenuOpen: boolean = false;
  workingOptionData: selectMenu[] = [];
  ngOnInit(): void {
    this.selectedValue = this.defaultOption;
    this.selectedOption = this.defaultOption
    this.workingOptionData = this.optionData;
    if (this.optionData.length <= 0) {
      this.optionData = [{ option: 'No data ', value: 'Select' }];
    }
    this.workingOptionData = this.optionData;
  }

  valueChangeHadler(item: selectMenu) {
    this.selectedValue = item.value;
    this.selectedOption = item.option;
    this.isMenuOpen = !this.isMenuOpen;
  }

  resetElement() {
    this.selectedValue = this.defaultOption;
    this.selectedOption = this.defaultOption;
    this.isMenuOpen = false;
  }
  menuToggler() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  filterHandler(searchString: string) {
    if (searchString.trim() === '') {
      this.workingOptionData = this.optionData;
    } else {
      this.workingOptionData = this.optionData.filter((x) =>
        x.option.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }
}
