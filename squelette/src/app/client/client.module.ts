import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuClientComponent } from './menu-client/menu-client.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { ClientRootingModule } from './client-rooting.module';

@NgModule({
  declarations: [
    MenuClientComponent,
    ClientComponent
  ],
  imports: [
    ClientRootingModule,
    CommonModule,
    FormsModule
  ]
})
export class ClientModule { }
