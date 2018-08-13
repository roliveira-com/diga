"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(platform, changeDetector) {
        this.platform = platform;
        this.changeDetector = changeDetector;
        // Use the component constructor to inject providers.
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
        if (this.platform.isAndroid) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
                if (_this.selectedIndex != 1) {
                    _this.selectedIndex = 1;
                    args.cancel = true;
                    _this.changeDetector.detectChanges();
                }
            });
        }
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "ns-tabs",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ['./tabs.component.scss']
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSx5Q0FBMkM7QUFRM0M7SUFJRSx1QkFBdUMsUUFBUSxFQUFVLGNBQWlDO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQUE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDeEYscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDMUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ3BCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFDdkQsVUFBQyxJQUFTO2dCQUNSLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO1lBQ0gsQ0FBQyxDQUNGLENBQUE7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQXZCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO1FBS2EsV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7aURBQTBDLHdCQUFpQjtPQUovRSxhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy10YWJzXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IE51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQgPyAxIDogMztcblxuICAgIGlmKHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkKXtcbiAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oXG4gICAgICAgIGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsXG4gICAgICAgIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkSW5kZXggIT0gMSl7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG4iXX0=