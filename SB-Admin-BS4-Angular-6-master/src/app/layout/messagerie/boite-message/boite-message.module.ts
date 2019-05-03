import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './boite-message.component';
import { MessageBoxRoutingModule } from './boite-message-routing.module';
import { BoiteMessagePageComponent } from './boite-message-page/boite-message-page.component';

@NgModule({
    imports: [CommonModule, MessageBoxRoutingModule],
    declarations: [MessageBoxComponent, BoiteMessagePageComponent]
})
export class MessageBoxModule {}
