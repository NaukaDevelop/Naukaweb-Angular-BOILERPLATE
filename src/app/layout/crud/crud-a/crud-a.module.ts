import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudARoutingModule } from './crud-a.routing';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudARoutingModule,
    MaterialModule,
  ]
})
export class CrudAModule { }
