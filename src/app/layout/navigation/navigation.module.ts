import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation.routing';
import { NavigationBrandComponent } from './components/navigation-brand/navigation-brand.component';
import { NavigationSidebarListComponent } from './components/navigation-sidebar-list/navigation-sidebar-list.component';
import { NavigationToolbarListComponent } from './components/navigation-toolbar-list/navigation-toolbar-list.component';
import { NavigationComponent } from './navigation.component';


@NgModule({
  declarations: [NavigationBrandComponent, NavigationSidebarListComponent, NavigationToolbarListComponent, NavigationComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
