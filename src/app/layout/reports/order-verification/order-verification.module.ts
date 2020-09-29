import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderVerificationRoutingModule } from './order-verification.routing';
import { OrderVerificationComponent } from './order-verification.component';


@NgModule({
  declarations: [OrderVerificationComponent],
  imports: [
    CommonModule,
    OrderVerificationRoutingModule
  ]
})
export class OrderVerificationModule { }
