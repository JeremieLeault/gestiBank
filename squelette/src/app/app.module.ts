import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './creation-compte/form/form.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DashAdminComponent } from './admin/dash-admin/dash-admin.component';
import { DashConseillerComponent } from './conseiller/dash-conseiller/dash-conseiller.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashAdminComponent,
    DashConseillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
