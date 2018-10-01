import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsDashboardComponent } from './assets-dashboard/assets-dashboard.component';
import { FeatherIconsModule } from '../feather-icons.module';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule,
    FeatherIconsModule
  ],
  declarations: [AssetsDashboardComponent]
})
export class AssetsModule { }
