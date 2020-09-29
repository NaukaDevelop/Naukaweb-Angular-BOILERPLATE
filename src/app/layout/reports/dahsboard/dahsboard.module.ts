import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DahsboardRoutingModule } from './dahsboard.routing';
import { DahsboardComponent } from './dahsboard.component';


@NgModule({
  declarations: [DahsboardComponent],
  imports: [
    CommonModule,
    DahsboardRoutingModule
  ]
})
export class DahsboardModule { }
