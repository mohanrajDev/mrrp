import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsDashboardComponent } from './assets/assets-dashboard/assets-dashboard.component';

const routes: Routes = [
  { path: 'assets', component: AssetsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
