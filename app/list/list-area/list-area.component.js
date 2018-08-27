"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-listview/angular");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
var ListAreaComponent = /** @class */ (function () {
    function ListAreaComponent(chatsService, router) {
        this.chatsService = chatsService;
        this.router = router;
        this.chats = this.chatsService.chats;
    }
    ListAreaComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ListAreaComponent.prototype, "listagem", {
        get: function () {
            return this.dados;
        },
        enumerable: true,
        configurable: true
    });
    ListAreaComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        if (args.data.x > 200) {
            console.log("Notify perform left action");
        }
        else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    };
    ListAreaComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    ListAreaComponent.prototype.onSwipeCellFinished = function (args) {
    };
    ListAreaComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListAreaComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
        this.chats.splice(this.chats.indexOf(args.object.bindingContext), 1);
    };
    ListAreaComponent.prototype.goBack = function () {
        this.router.back();
    };
    __decorate([
        core_1.ViewChild("myListView"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], ListAreaComponent.prototype, "listViewComponent", void 0);
    ListAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-list-area',
            templateUrl: './list-area.component.html',
            styleUrls: ['./list-area.component.scss'],
        }),
        __metadata("design:paramtypes", [core_2.ChatsService, router_1.RouterExtensions])
    ], ListAreaComponent);
    return ListAreaComponent;
}());
exports.ListAreaComponent = ListAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0QsNERBQXdFO0FBRXhFLHNEQUErRDtBQUUvRCxtQ0FBZ0Q7QUFRaEQ7SUFJRSwyQkFBbUIsWUFBMEIsRUFBVSxNQUF3QjtRQUE1RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQzdFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUlELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRU0seUNBQWEsR0FBcEIsVUFBcUIsSUFBdUI7UUFDMUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFTSw4Q0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDL0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFPLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQU8sYUFBYSxDQUFDLENBQUM7UUFDN0QsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQyxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwrQ0FBbUIsR0FBMUIsVUFBMkIsSUFBdUI7SUFFbEQsQ0FBQztJQUVNLDRDQUFnQixHQUF2QixVQUF3QixJQUF1QjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEIsVUFBeUIsSUFBSTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTlDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjtnRUFBQztJQVJ0RCxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBS2lDLG1CQUFZLEVBQWtCLHlCQUFnQjtPQUpwRSxpQkFBaUIsQ0F3RDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UsIENoYXQgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtbGlzdC1hcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtYXJlYS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0QXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0czogQ2hhdFtdO1xuICBwdWJsaWMgZGFkb3M6IGFueVtdXG5cbiAgY29uc3RydWN0b3IocHVibGljIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuY2hhdHMgPSB0aGlzLmNoYXRzU2VydmljZS5jaGF0cztcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGdldCBsaXN0YWdlbSgpe1xuICAgIHJldHVybiB0aGlzLmRhZG9zO1xuICB9XG5cbiAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICBjb25zdCBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcblxuICAgIGlmIChhcmdzLmRhdGEueCA+IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvblwiKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgIGNvbnN0IHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdtYXJrLXZpZXcnKTtcbiAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XG4gICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgfVxuXG4gIHB1YmxpYyBvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xuICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICB9XG5cbiAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJpZ2h0IHN3aXBlIGNsaWNrXCIpO1xuICAgIHRoaXMuY2hhdHMuc3BsaWNlKHRoaXMuY2hhdHMuaW5kZXhPZihhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCksIDEpO1xuICB9XG5cbiAgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cblxufSJdfQ==