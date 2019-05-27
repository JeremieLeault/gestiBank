import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from '../app/creation-compte/form-ana/form.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DashConseillerComponent } from './conseiller/dash-conseiller/dash-conseiller.component';
import { MenuComponent } from './menu/menu.component';
import { DashClientComponent } from './client/dash-client/dash-client.component';
import { AdminModule } from './admin/admin.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientModule } from './client/client.module';
import { ConseillerModule } from './conseiller/conseiller.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    // DashAdminComponent,
    //DashConseillerComponent,
    MenuComponent,
    //DashClientComponent,
    AccueilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    ConseillerModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
