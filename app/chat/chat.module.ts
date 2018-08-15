import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { ChatRoutingModule } from "./chat.routing";
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import { MessagesAreaComponent } from './messages-area/messages-area.component';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ChatRoutingModule,
    SharedModule,
    NativeScriptFormsModule,
    TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
  ],
  declarations: [
    ChatComponent,
    MessagesAreaComponent,
    MessageBoxComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class ChatModule { }
