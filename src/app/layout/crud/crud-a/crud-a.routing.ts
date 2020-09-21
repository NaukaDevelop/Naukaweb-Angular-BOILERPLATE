import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAComponent } from './crud-a.component';

const routes: Routes = [{ path: "", component: CrudAComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudARoutingModule { }
