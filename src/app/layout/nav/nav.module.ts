

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NavRoutingModule } from './nav.routing';
import { NavComponent } from './nav/nav.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { ToolbarListComponent } from './nav/toolbar-list/toolbar-list.component';
import { StoreSelectorComponent } from './nav/toolbar-list/store-selector/store-selector.component';


// Vendor
import { NgSelectModule } from '@ng-select/ng-select';
import { BrandLogoComponent } from './nav/brand-logo/brand-logo.component';



@NgModule({
  declarations: [NavComponent, SidenavListComponent, ToolbarListComponent, StoreSelectorComponent, BrandLogoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NavRoutingModule,
    LayoutModule,
    MaterialModule,
    NgSelectModule,
  ],
  exports: [NavComponent]
})
export class NavModule { }
