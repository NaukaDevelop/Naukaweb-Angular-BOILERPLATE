import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFinderComponent } from './product-finder.component';

const routes: Routes = [{ path: "", component: ProductFinderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFinderRoutingModule { }
