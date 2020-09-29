import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';


const routes: Routes = [

  { path: "", redirectTo: 'nav', pathMatch: "full" },

  {
    path: 'nav', component: NavComponent, children: [

      {
        path: 'dashboard',
        loadChildren: () =>
          import('../reports/dahsboard/dahsboard.module').then((m) => m.DahsboardModule),
      },

      {
        path: 'order-monitor',
        loadChildren: () =>
          import('../reports/order-monitor/order-monitor.module').then((m) => m.OrderMonitorModule),
      },

      {
        path: 'order-report',
        loadChildren: () =>
          import('../reports/order-report/order-report.module').then((m) => m.OrderReportModule),
      },

      {
        path: 'order-special',
        loadChildren: () =>
          import('../reports/order-special/order-special.module').then((m) => m.OrderSpecialModule),
      },


      {
        path: 'order-split',
        loadChildren: () =>
          import('../reports/order-split/order-split.module').then((m) => m.OrderSplitModule),
      },

      {
        path: 'order-verification',
        loadChildren: () =>
          import('../reports/order-verification/order-verification.module').then((m) => m.OrderVerificationModule),
      },

      {
        path: 'product-finder',
        loadChildren: () =>
          import('../reports/product-finder/product-finder.module').then((m) => m.ProductFinderModule),
      },
      {
        path: 'shipping-validation',
        loadChildren: () =>
          import('../reports/shipping-validation/shipping-validation.module').then((m) => m.ShippingValidationModule),
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
