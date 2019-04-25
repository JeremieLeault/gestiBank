import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ManagerRoutingModule],
    declarations: [ManagerComponent]
})
export class ManagerModule {}
