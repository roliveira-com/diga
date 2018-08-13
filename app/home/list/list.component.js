"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-listview/angular");
var chats_service_1 = require("../chats/chats.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(chatsService) {
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        if (args.data.x > 200) {
            console.log("Notify perform left action");
        }
        else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    ListComponent.prototype.onSwipeCellFinished = function (args) {
    };
    ListComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
        this.chats.splice(this.chats.indexOf(args.object.bindingContext), 1);
    };
    __decorate([
        core_1.ViewChild("myListView"),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], ListComponent.prototype, "listViewComponent", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-list-view',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss'],
        }),
        __metadata("design:paramtypes", [chats_service_1.ChatsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCw0REFBd0U7QUFHeEUsd0RBQXNEO0FBUXREO0lBR0UsdUJBQVksWUFBMEI7UUFGL0IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUlELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsSUFBdUI7UUFDMUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDL0MsSUFBTSxXQUFXLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBTSxTQUFTLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFNLFFBQVEsR0FBVSxTQUFTLENBQUMsV0FBVyxDQUFPLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sU0FBUyxHQUFTLFNBQVMsQ0FBQyxXQUFXLENBQU8sYUFBYSxDQUFDLENBQUM7UUFDbkUsV0FBVyxDQUFDLElBQUksR0FBUSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxHQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsSUFBdUI7SUFFbEQsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixJQUF1QjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEIsVUFBeUIsSUFBSTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBdEN3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsOEJBQW9COzREQUFDO0lBUHRELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBSTBCLDRCQUFZO09BSDNCLGFBQWEsQ0E4Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuLi9jaGF0cy9jaGF0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtbGlzdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2hhdHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSkge1xuICAgIHRoaXMuY2hhdHMgPSBjaGF0c1NlcnZpY2UuY2hhdHM7XG4gIH1cblxuICBAVmlld0NoaWxkKFwibXlMaXN0Vmlld1wiKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBwdWJsaWMgb25DZWxsU3dpcGluZyhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIGxlZnQgYWN0aW9uXCIpO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc3Qgc3dpcGVMaW1pdHMgICAgID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgIGNvbnN0IHN3aXBlVmlldyAgICAgICA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGxlZnRJdGVtICAgICAgICA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignbWFyay12aWV3Jyk7XG4gICAgY29uc3QgcmlnaHRJdGVtICAgICAgID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdkZWxldGUtdmlldycpO1xuICAgIHN3aXBlTGltaXRzLmxlZnQgICAgICA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICBzd2lwZUxpbWl0cy5yaWdodCAgICAgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gIH1cblxuICBwdWJsaWMgb25Td2lwZUNlbGxGaW5pc2hlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICBcbiAgfVxuXG4gIHB1YmxpYyBvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xuICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICB9XG5cbiAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJpZ2h0IHN3aXBlIGNsaWNrXCIpO1xuICAgIHRoaXMuY2hhdHMuc3BsaWNlKHRoaXMuY2hhdHMuaW5kZXhPZihhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCksIDEpO1xuICB9XG59Il19