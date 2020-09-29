import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMonitorComponent } from './order-monitor.component';

const routes: Routes = [{ path: "", component: OrderMonitorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderMonitorRoutingModule { }
