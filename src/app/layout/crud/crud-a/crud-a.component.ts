import { Component, OnInit } from '@angular/core';
import { CrudAService } from 'src/shared/services/crud/crud-a.service';


@Component({
  selector: 'app-crud-a',
  templateUrl: './crud-a.component.html',
  styleUrls: ['./crud-a.component.scss']
})
export class CrudAComponent implements OnInit {

  service: Array <string>
  service1: Array <string>

  constructor(private crudAService: CrudAService) { 
    
    this.service = this.crudAService.getAllRecords();
    
    this.service1 = this.crudAService.createRecord("amarillo");
  }

  ngOnInit(): void {
  }

}
