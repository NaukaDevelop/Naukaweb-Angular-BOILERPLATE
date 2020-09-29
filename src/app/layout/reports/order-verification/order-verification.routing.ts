import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderVerificationComponent } from './order-verification.component';

const routes: Routes = [{ path: "", component: OrderVerificationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderVerificationRoutingModule { }
