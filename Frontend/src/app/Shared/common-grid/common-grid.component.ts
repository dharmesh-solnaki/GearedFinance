import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  IGridSettings,
  PaginationSetting,
  SortConfiguration,
  SortOrder,
} from './common-grid.model';
import { selectMenu } from '../constants.model';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.css'],
})
export class CommonGridComponent {
  public girdSettings: IGridSettings;
  public paginationSetting!: PaginationSetting;
  public showPagination: boolean = true;
  public pageSize!: number;
  public displayData: any = [];
  public pageSizeOptions: selectMenu[] = [];
  pageNumbers: number[] = [];
  defaultSettings: IGridSettings = {
    columns: [],
    showPagination: false,
    pageSizeValues: [
      { pageNo: 25, text: '25 per page' },
      { pageNo: 50, text: '50 per page' },
      { pageNo: 100, text: '100 per page' },
    ],
  };
  defaultPaginationSetting: PaginationSetting = {
    currentPage: 1,
    totalRecords: 25,
    selectedPageSize: ['25 per page'],
  };

  /**
   *
   */
  constructor() {
    this.girdSettings = this.defaultSettings
    
  }

  @Input() data: any[] = [];
  @Input() public set gridSettings(value: IGridSettings) {
    
    if(value){
      this.girdSettings = value;
      console.log(this.girdSettings)
    }else{
      this.girdSettings = Object.assign(this.defaultSettings)
    }

    if (
      value  &&
      value.showPagination &&
      !value.showPagination
    ) {
      this.showPagination = value.showPagination;
    }
    ;
  }

  @Input() public set paginationSettings(value: PaginationSetting) {
    if (value) {
      this.paginationSetting = {
        currentPage: value.currentPage,
        totalRecords: value.totalRecords,
        selectedPageSize: [value.selectedPageSize![0] + ' per page'],
      };
    } else {
      this.paginationSetting = this.defaultPaginationSetting;
    }
    this.pageSize = +this.paginationSetting.selectedPageSize![0].split(' ')[0];
    this.updateDisplayedData();
  }

  @Output() onSortEvent = new EventEmitter<SortConfiguration>();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.this.
  
    this.updateDisplayedData();
    this.pagSizeSetter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDisplayedData();
    this.updatePageNumbers();
    this.pagSizeSetter();
  }

  // -----------Sorting----------------
  public sortOrder = SortOrder.ASC;
  public previousSort: string = '';
  public previousSortOrder = SortOrder.Default;
  sort(col: string, sort: boolean) {
    if (sort) {
      if (col === this.previousSort) {
        this.sortOrder =
          this.previousSortOrder == SortOrder.ASC
            ? SortOrder.DESC
            : SortOrder.ASC;
      } else {
        this.sortOrder = SortOrder.ASC;
      }
      this.previousSort = col;
      this.previousSortOrder = this.sortOrder;

      let sortDetails = new SortConfiguration();
      sortDetails.sort = col;
      sortDetails.sortOrder = this.sortOrder;

      this.onSortEvent.emit(sortDetails);
      this.updateDisplayedData();
    }
  }
  sortUp(columnName: string) {
    return (
      this.previousSort == columnName &&
      this.previousSortOrder == SortOrder.DESC
    );
  }
  sortDown(columnName: string) {
    return (
      this.previousSort == columnName && this.previousSortOrder == SortOrder.ASC
    );
  }
  sortDefault(columnName: string) {
    return (
      this.previousSortOrder == SortOrder.Default ||
      this.previousSort != columnName
    );
  }

  ///-----------------pagination

  isShowPagination() {
    return (
      this.girdSettings.showPagination &&
      this.displayData.length > 0 &&
      this.paginationSetting.totalRecords > this.pageSize
    );
  }

  updateDisplayedData() {
    const startIndex = (this.paginationSetting.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + +this.pageSize;

    this.displayData = this.data.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.paginationSetting.currentPage > 1) {
      this.paginationSetting.currentPage--;
      this.updateDisplayedData();
    }
  }

  goToNextPage() {
    if (!this.isLastPage()) {
      this.paginationSetting.currentPage++;
      this.updateDisplayedData();
    }
  }

  isLastPage(): boolean {
    const lastPage = Math.ceil(
      this.paginationSetting.totalRecords / +this.pageSize
    );
    return this.paginationSetting.currentPage >= lastPage;
  }

  goToPage(page: number) {
    this.paginationSetting.currentPage = page;
    this.updateDisplayedData();
  }
  updatePageNumbers() {
    const totalPages = Math.ceil(
      this.paginationSetting.totalRecords / +this.pageSize
    );
    this.pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pagSizeSetter() {
    if (this.gridSettings && this.gridSettings.pageSizeValues) {
      this.gridSettings.pageSizeValues.forEach((item) => {
        console.log(item);
      });
    }
  }
}
