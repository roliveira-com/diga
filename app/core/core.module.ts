import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { ChatsService } from './chats.service';

@NgModule({
  imports: [
    NativeScriptModule,
  ],
  providers: [
    ChatsService,
  ],
})
export class CoreModule { }
