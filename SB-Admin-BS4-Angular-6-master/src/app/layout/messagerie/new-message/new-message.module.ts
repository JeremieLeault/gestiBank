import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMessagePageComponent } from './new-message-page/new-message-page.component';
import { NewMessageComponent } from './new-message.component';
import { NewMessageRoutingModule } from './new-message-routing.module';

@NgModule({
    imports: [CommonModule, NewMessageRoutingModule],
    declarations: [NewMessageComponent, NewMessagePageComponent]
})
export class NewMessageModule {}
