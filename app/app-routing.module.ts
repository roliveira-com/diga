import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "list", component: ListComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "chat/:index", loadChildren: "./chat/chat.module#ChatModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
