import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClientComponent } from './client-layout/dashboard-client/dashboard-client.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';

@NgModule({
  declarations: [DashboardClientComponent, ClientLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
