import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingValidationRoutingModule } from './shipping-validation.routing';
import { ShippingValidationComponent } from './shipping-validation.component';


@NgModule({
  declarations: [ShippingValidationComponent],
  imports: [
    CommonModule,
    ShippingValidationRoutingModule
  ]
})
export class ShippingValidationModule { }
