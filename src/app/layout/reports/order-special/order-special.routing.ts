import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSpecialComponent } from './order-special.component';

const routes: Routes = [{ path: "", component: OrderSpecialComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSpecialRoutingModule { }
