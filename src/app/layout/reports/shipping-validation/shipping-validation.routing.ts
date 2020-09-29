import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingValidationComponent } from './shipping-validation.component';

const routes: Routes = [{ path: "", component: ShippingValidationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingValidationRoutingModule { }
