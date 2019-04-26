import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilClientRoutingModule } from './profil-client-routing.module';
import { ProfilClientComponent } from './profil-client.component';
import { ProfilFormAnaComponent } from './form-ana/profil-form-ana.component';

@NgModule({
    imports: [CommonModule, ProfilClientRoutingModule],
    declarations: [ProfilClientComponent, ProfilFormAnaComponent]
})
export class ProfilClientModule {}
