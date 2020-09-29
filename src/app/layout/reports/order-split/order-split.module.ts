import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSplitRoutingModule } from './order-split.routing';
import { OrderSplitComponent } from './order-split.component';


@NgModule({
  declarations: [OrderSplitComponent],
  imports: [
    CommonModule,
    OrderSplitRoutingModule
  ]
})
export class OrderSplitModule { }
