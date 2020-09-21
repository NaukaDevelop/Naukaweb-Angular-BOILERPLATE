import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ByeComponent } from './core/pages/bye/bye.component';
import { AccessDeniedComponent } from './core/pages/access-denied/access-denied.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';

const firstPageAddress: string = "home"

const routes: Routes = [{path: "", redirectTo: firstPageAddress, pathMatch: "full"},
{path: "home", component: HomeComponent},
{path: "bye", component: ByeComponent},

{
  path: 'layout',
  loadChildren: () =>
  import('./layout/layout.module').then((m) => m.LayoutModule),
  },
{path: "access-denied", component: AccessDeniedComponent},
{path: "error", component: ErrorComponent},
{path: '**', redirectTo: 'notfound' },
{path: "notfound", component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
