import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { ReportAComponent } from './reports/report-a/report-a.component';
import { ReportBComponent } from './reports/report-b/report-b.component';
import { ReportCComponent } from './reports/report-c/report-c.component';
import { CrudAComponent } from './crud/crud-a/crud-a.component';
import { CrudBComponent } from './crud/crud-b/crud-b.component';
import { CrudCComponent } from './crud/crud-c/crud-c.component';
import { LayoutInitComponent } from './layout-init/layout-init.component';


@NgModule({
  declarations: [ReportAComponent, ReportBComponent, ReportCComponent, CrudAComponent, CrudBComponent, CrudCComponent, LayoutInitComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
