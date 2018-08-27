"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ListComponent = /** @class */ (function () {
    function ListComponent(router) {
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.goBack = function () {
        this.router.back();
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-list-view',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFRL0Q7SUFFRSx1QkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRSxDQUFDO0lBRTlDLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQVRVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBRzJCLHlCQUFnQjtPQUZoQyxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtbGlzdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpe31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cblxufSJdfQ==