import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSpecialRoutingModule } from './order-special.routing';
import { OrderSpecialComponent } from './order-special.component';


@NgModule({
  declarations: [OrderSpecialComponent],
  imports: [
    CommonModule,
    OrderSpecialRoutingModule
  ]
})
export class OrderSpecialModule { }
