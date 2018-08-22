"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-listview/angular");
var router_1 = require("nativescript-angular/router");
var chats_service_1 = require("../core/chats.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(chatsService, router) {
        this.router = router;
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
    ListComponent.prototype.goBack = function () {
        this.router.back();
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
        __metadata("design:paramtypes", [chats_service_1.ChatsService, router_1.RouterExtensions])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCw0REFBd0U7QUFFeEUsc0RBQStEO0FBRS9ELHVEQUFxRDtBQVFyRDtJQUdFLHVCQUFZLFlBQTBCLEVBQVUsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGakUsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUlELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsSUFBdUI7UUFDMUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDL0MsSUFBTSxXQUFXLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBTSxTQUFTLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFNLFFBQVEsR0FBVSxTQUFTLENBQUMsV0FBVyxDQUFPLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sU0FBUyxHQUFTLFNBQVMsQ0FBQyxXQUFXLENBQU8sYUFBYSxDQUFDLENBQUM7UUFDbkUsV0FBVyxDQUFDLElBQUksR0FBUSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxHQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsSUFBdUI7SUFFbEQsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixJQUF1QjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEIsVUFBeUIsSUFBSTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjs0REFBQztJQVB0RCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUkwQiw0QkFBWSxFQUFrQix5QkFBZ0I7T0FIN0QsYUFBYSxDQW1EekI7SUFBRCxvQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9jaGF0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtbGlzdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2hhdHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLmNoYXRzID0gY2hhdHNTZXJ2aWNlLmNoYXRzO1xuICB9XG5cbiAgQFZpZXdDaGlsZChcIm15TGlzdFZpZXdcIikgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICBjb25zdCBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcblxuICAgIGlmIChhcmdzLmRhdGEueCA+IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvblwiKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnN0IHN3aXBlTGltaXRzICAgICA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICBjb25zdCBzd2lwZVZpZXcgICAgICAgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBsZWZ0SXRlbSAgICAgICAgPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xuICAgIGNvbnN0IHJpZ2h0SXRlbSAgICAgICA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignZGVsZXRlLXZpZXcnKTtcbiAgICBzd2lwZUxpbWl0cy5sZWZ0ICAgICAgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgc3dpcGVMaW1pdHMucmlnaHQgICAgID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICB9XG5cbiAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgXG4gIH1cblxuICBwdWJsaWMgb25MZWZ0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiTGVmdCBzd2lwZSBjbGlja1wiKTtcbiAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJSaWdodCBzd2lwZSBjbGlja1wiKTtcbiAgICB0aGlzLmNoYXRzLnNwbGljZSh0aGlzLmNoYXRzLmluZGV4T2YoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQpLCAxKTtcbiAgfVxuXG4gIHB1YmxpYyBnb0JhY2soKXtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cblxufSJdfQ==