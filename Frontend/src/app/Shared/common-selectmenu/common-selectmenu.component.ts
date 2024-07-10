import {
  Component,
  Input,
  OnInit,
  HostListener,
  ElementRef,
  forwardRef,
  SimpleChanges,
} from '@angular/core';
import { selectMenu } from '../constants.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Array<T> {
  isNotEmpty(): boolean;
}

@Component({
  selector: 'app-common-selectmenu',
  templateUrl: './common-selectmenu.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonSelectmenuComponent),
      multi: true,
    },
  ],
})
export class CommonSelectmenuComponent implements OnInit, ControlValueAccessor {
  @Input() optionData: selectMenu[] = [];
  @Input() defaultOption: string = '';
  @Input() needsSearching: boolean = false;
  selectedValue: string | number = '';
  selectedOption: string | number = '';
  isMenuOpen: boolean = false;
  workingOptionData: selectMenu[] = [];
  isFieldRequired: boolean = false;

  constructor(private elementRef: ElementRef) {}
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this.selectedValue = value;
      const selectedOption = this.optionData.find(
        (option) => option.value === value
      );
      if (selectedOption) {
        this.selectedOption = selectedOption.option;
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
  updateTheOptionData(newData: selectMenu[]) {
    // newData:selectMenu[]
    //  this.optionData=newData
    this.optionData = newData;
 
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
this.workingOptionData = this.optionData;
  }
  ngOnInit(): void {
    this.selectedValue = this.defaultOption;
    this.selectedOption = this.defaultOption;

    if (!this.optionData.isNotEmpty()) {
      this.optionData = [{ option: 'No data', value: 'Select' }];
    }
    this.workingOptionData = this.optionData;
  }

  valueChangeHadler(item: selectMenu) {
    this.selectedValue = item.value;
    this.selectedOption = item.option;
    this.isMenuOpen = false;
    this.onChange(this.selectedValue);
    this.onTouched();
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
