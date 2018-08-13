"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(platform) {
        this.platform = platform;
        // Use the component constructor to inject providers.
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "ns-tabs",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ['./tabs.component.scss']
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRDtJQUlFLHVCQUF1QyxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUM3QyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBVlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQztRQUthLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztPQUpwQixhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtdGFic1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYnMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBOdW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0pIHtcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQgPyAxIDogMztcbiAgfVxufVxuIl19