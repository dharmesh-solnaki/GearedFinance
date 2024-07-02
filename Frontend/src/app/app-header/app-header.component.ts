import { Component, OnInit } from '@angular/core';
import { MenuBarItems } from '../Shared/constants.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['../../assets/Styles/app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  menuData: { menuItem: string; imagePath: string }[] = [];
  shuoldVisible: boolean = false;
  shouldVisibleCanvas: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menuData = MenuBarItems;
  }

  navExpand() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      this.shouldVisibleCanvas = true; // Show offcanvas menu
      this.shuoldVisible = false; // Hide other elements as needed
    } else {
      this.shouldVisibleCanvas = false; // Hide offcanvas menu
      this.shuoldVisible = !this.shuoldVisible; // Toggle other elements
    }
  }
}
