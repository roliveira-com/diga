import { Component, OnInit, Inject } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(@Inject('platform') public platform, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    goToList(){
        this.routerExtensions.navigate(['list'])
    }
}
