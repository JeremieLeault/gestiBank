import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { AjoutConseillerComponent } from './ajout-conseiller/ajout-conseiller.component';
import { ListeConseillerComponent } from './liste-conseiller/liste-conseiller.component';
import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';

const routes: Routes = [
    {
        path: '', component: ManagerComponent,

        children: [

            { path: 'liste-conseiller', component: ListeConseillerComponent },
            { path: 'ajout-conseiller', component: AjoutConseillerComponent },
            { path: 'edit-conseiller', component: EditConseillerComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations:
        [ListeConseillerComponent,
            AjoutConseillerComponent,
            EditConseillerComponent
        ],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }
