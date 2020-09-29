import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderReportRoutingModule } from './order-report.routing';
import { OrderReportComponent } from './order-report.component';


@NgModule({
  declarations: [OrderReportComponent],
  imports: [
    CommonModule,
    OrderReportRoutingModule
  ]
})
export class OrderReportModule { }
