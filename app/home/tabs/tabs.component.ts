import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "ns-tabs",
  moduleId: module.id,
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public selectedIndex: Number;

  constructor(@Inject('platform') public platform) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.selectedIndex = this.platform.isAndroid ? 1 : 3;
  }
}
