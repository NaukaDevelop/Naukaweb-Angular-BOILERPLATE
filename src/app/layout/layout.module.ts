import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { LayoutInitComponent } from './layout-init/layout-init.component';

import { MaterialModule } from 'src/app/core/material/material.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [LayoutInitComponent, NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,

  ]
})
export class LayoutModule { }
