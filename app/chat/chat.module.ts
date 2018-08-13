import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'

import { ChatRoutingModule } from "./chat.routing";
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ChatRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
  ],
  declarations: [
    ChatComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class ChatModule { }
