import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderMonitorRoutingModule } from './order-monitor.routing';
import { OrderMonitorComponent } from './order-monitor.component';


@NgModule({
  declarations: [OrderMonitorComponent],
  imports: [
    CommonModule,
    OrderMonitorRoutingModule
  ]
})
export class OrderMonitorModule { }
