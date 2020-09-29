import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrls: ['./store-selector.component.scss']
})
export class StoreSelectorComponent implements OnInit {

  storeList = [
    {storeId: '1', storeName: 'First Store'},
    {storeId: '2', storeName: 'Second Store'},
    {storeId: '3', storeName: 'Third Store'}
]
  selectedStore = {storeId: '3', storeName: 'Third Store'}

  constructor() { }

  ngOnInit(): void {

  }

  onChangeStore(){

  }

  getWidth(){
    return '200px';
  }
}
