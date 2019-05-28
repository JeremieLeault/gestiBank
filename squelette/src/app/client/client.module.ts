import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuClientComponent } from './menu-client/menu-client.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { ClientRootingModule } from './client-rooting.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../service/client.service';
import { CompteService } from '../service/compte.service';

@NgModule({
  declarations: [
    MenuClientComponent,
    ClientComponent
  ],
  imports: [
    ClientRootingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    ClientService,
    CompteService
  ]
})
export class ClientModule { }
