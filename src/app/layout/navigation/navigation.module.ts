import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
menuimport { FormsModule } from '@angular/forms';

// Components and routing
import { NavigationRoutingModule } from './navigation.routing';
import { NavigationBrandComponent } from './components/navigation-brand/navigation-brand.component';
import { NavigationSidebarListComponent } from './components/navigation-sidebar-list/navigation-sidebar-list.component';
import { NavigationToolbarListComponent } from './components/navigation-toolbar-list/navigation-toolbar-list.component';
import { NavigationComponent } from './navigation.component';
// Local
import { MaterialModule } from 'src/app/core/material/material.module';

// Vendor
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [NavigationBrandComponent, NavigationSidebarListComponent, NavigationToolbarListComponent, NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgSelectModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
