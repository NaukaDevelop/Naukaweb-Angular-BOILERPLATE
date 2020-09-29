import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSplitComponent } from './order-split.component';

const routes: Routes = [{ path: "", component: OrderSplitComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSplitRoutingModule { }
