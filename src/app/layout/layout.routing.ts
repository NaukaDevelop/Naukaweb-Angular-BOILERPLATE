import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutInitComponent } from './layout-init/layout-init.component';

const routes: Routes = [{path: "", redirectTo: "init", pathMatch: "full"},
{path: "init", component: LayoutInitComponent},
{
  path: 'crud-a',
  loadChildren: () =>
  import('./crud/crud-a/crud-a.module').then((m) => m.CrudAModule),
  },

{
  path: 'crud-b',
  loadChildren: () =>
  import('./crud/crud-b/crud-b.module').then((m) => m.CrudBModule),
  },
  
{
  path: 'crud-c',
  loadChildren: () =>
  import('./crud/crud-c/crud-c.module').then((m) => m.CrudCModule),
  },
    
{
  path: 'report-a',
  loadChildren: () =>
  import('./reports/report-a/report-a.module').then((m) => m.ReportAModule),
  },
      
{
  path: 'report-b',
  loadChildren: () =>
  import('./reports/report-b/report-b.module').then((m) => m.ReportBModule),
  },
        
{
  path: 'report-c',
  loadChildren: () =>
  import('./reports/report-c/report-c.module').then((m) => m.ReportCModule),
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
