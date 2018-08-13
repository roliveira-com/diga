import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import * as application from 'application';

@Component({
  selector: "ns-tabs",
  moduleId: module.id,
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public selectedIndex: Number;

  constructor(@Inject('platform') public platform, private changeDetector: ChangeDetectorRef) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.selectedIndex = this.platform.isAndroid ? 1 : 3;

    if(this.platform.isAndroid){
      application.android.on(
        application.AndroidApplication.activityBackPressedEvent,
        (args: any) => {
          if(this.selectedIndex != 1){
            this.selectedIndex = 1;
            args.cancel = true;
            this.changeDetector.detectChanges();
          }
        }
      )
    }
  }
}
