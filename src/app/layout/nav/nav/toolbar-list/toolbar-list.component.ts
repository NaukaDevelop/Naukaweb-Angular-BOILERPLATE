import { Component, OnInit } from '@angular/core';

import { NavService } from 'src/shared/services';

@Component({
  selector: 'app-toolbar-list',
  templateUrl: './toolbar-list.component.html',
  styleUrls: ['./toolbar-list.component.scss']
})
export class ToolbarListComponent implements OnInit {

  isAuthenticated = true
  currentStore = {
    storeName: 'Title'
  }

  constructor(
    private navService: NavService
    ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.navService.AClicked('Component A is clicked!!');
  }


  toggleDrawer() {
    this.navService.toggle();
}

logout(){

}

}
