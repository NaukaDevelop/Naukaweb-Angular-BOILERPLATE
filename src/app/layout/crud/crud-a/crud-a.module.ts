import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudARoutingModule } from './crud-a.routing';
import { MaterialModule } from 'src/app/core/material/material.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudARoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CrudAModule { }
