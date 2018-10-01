import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialWebModule } from './material-web.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetsModule } from './assets/assets.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FeatherIconsModule } from './feather-icons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialWebModule,
    FeatherIconsModule,
    AppRoutingModule,
    AuthRoutingModule,
    AssetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
