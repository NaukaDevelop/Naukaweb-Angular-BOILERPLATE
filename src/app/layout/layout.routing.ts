import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: "", redirectTo: 'nav', pathMatch: "full" },
  {
    path: 'nav',
    loadChildren: () =>
      import('./nav/nav.module').then((m) => m.NavModule),
  },

  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module').then((m) => m.NavigationModule),
  },

  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./reports/dahsboard/dahsboard.module').then((m) => m.DahsboardModule),
  // },

  // {
  //   path: 'order-monitor',
  //   loadChildren: () =>
  //     import('./reports/order-monitor/order-monitor.module').then((m) => m.OrderMonitorModule),
  // },

  // {
  //   path: 'order-report',
  //   loadChildren: () =>
  //     import('./reports/order-report/order-report.module').then((m) => m.OrderReportModule),
  // },

  // {
  //   path: 'order-split',
  //   loadChildren: () =>
  //     import('./reports/order-split/order-split.module').then((m) => m.OrderSplitModule),
  // },

  // {
  //   path: 'order-verification',
  //   loadChildren: () =>
  //     import('./reports/order-verification/order-verification.module').then((m) => m.OrderVerificationModule),
  // },

  // {
  //   path: 'product-finder',
  //   loadChildren: () =>
  //     import('./reports/product-finder/product-finder.module').then((m) => m.ProductFinderModule),
  // },
  // {
  //   path: 'shipping-validation',
  //   loadChildren: () =>
  //     import('./reports/shipping-validation/shipping-validation.module').then((m) => m.ShippingValidationModule),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
