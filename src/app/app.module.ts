import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { DefaultLayoutModule } from './layout/default-layout/default-layout.module';
import { MasterLayoutModule } from './layout/master-layout/master-layout.module';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DefaultLayoutModule,
    AdminLayoutModule,
    MasterLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DefaultLayoutComponent]
})
export class AppModule { }
