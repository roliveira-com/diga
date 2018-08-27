import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { ListRoutingModule } from "./list.routing";
import { ListComponent } from './list.component';
import { ListAreaComponent } from './list-area/list-area.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    ListRoutingModule,
    TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
  ],
  declarations: [
    ListComponent,
    ListAreaComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class ListModule { }