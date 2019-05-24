import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashConseillerComponent } from './dash-conseiller/dash-conseiller.component';
import { MailConseillerComponent } from './mail-conseiller/mail-conseiller.component';
import { ValidationAffectComponent } from './validation-affect/validation-affect.component';
import { ConfigClientComponent } from './config-client/config-client.component';
import { SearchConseillerComponent } from './search-conseiller/search-conseiller.component';
import { DemandeChequierComponent } from './demande-chequier/demande-chequier.component';
import { DemandeCompteComponent } from './demande-compte/demande-compte.component';
import { MenuConseillerComponent } from './menu-conseiller/menu-conseiller.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClientSearchComponent } from './search-conseiller/client-search/client-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ConseillerService } from './conseiller.service';
import { ClientService } from '../client/client.service';

const conseillerRoutes: Routes = [
{path : '', component: DashConseillerComponent, },
{path : 'dash-conseiller/validation-affect', component: ValidationAffectComponent},
{path : 'dash-conseiller/demande-compte', component: DemandeCompteComponent},
{path : 'dash-conseiller/demande-chequier', component: DemandeChequierComponent},
{path : 'dash-conseiller/search-conseiller', component: SearchConseillerComponent},
{path : 'dash-conseiller/mail-conseiller', component: MailConseillerComponent},
{path : 'dash-conseiller/search-conseiller/view-client/:id', component: ClientSearchComponent}

];

@NgModule({
  declarations: [DashConseillerComponent,
    MailConseillerComponent,
    ValidationAffectComponent,
    ConfigClientComponent,
    SearchConseillerComponent,
    DemandeChequierComponent,
    DemandeCompteComponent,
    MenuConseillerComponent,
    ClientSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(conseillerRoutes),
    HttpClientModule
  ],
  providers: [
    ConseillerService,
    ClientService
  ]
})
export class ConseillerModule { }
