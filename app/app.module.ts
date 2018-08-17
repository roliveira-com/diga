import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'
import { Fab } from 'nativescript-floatingactionbutton'; 
import { registerElement } from 'nativescript-angular/element-registry';
import * as platform from 'platform';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from './core';
import { AppComponent } from "./app.component";

registerElement('Fab', () => Fab)

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CoreModule,
        NativeScriptUIListViewModule,
    ],
    declarations: [
        AppComponent
    ],
    providers:[
        { provide: 'platform', useValue: platform }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
