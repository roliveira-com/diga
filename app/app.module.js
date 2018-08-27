"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var element_registry_1 = require("nativescript-angular/element-registry");
var platform = require("platform");
var app_routing_module_1 = require("./app-routing.module");
var core_2 = require("./core");
var app_component_1 = require("./app.component");
element_registry_1.registerElement('Fab', function () { return nativescript_floatingactionbutton_1.Fab; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                core_2.CoreModule,
                angular_1.NativeScriptUIListViewModule,
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [
                { provide: 'platform', useValue: platform }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDREQUErRTtBQUMvRSx1RkFBd0Q7QUFDeEQsMEVBQXdFO0FBQ3hFLG1DQUFxQztBQUVyQywyREFBd0Q7QUFDeEQsK0JBQW9DO0FBQ3BDLGlEQUErQztBQUUvQyxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsdUNBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQTtBQXNCakM7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLGlCQUFVO2dCQUNWLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFDO2dCQUNOLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2FBQzlDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInXG5pbXBvcnQgeyBGYWIgfSBmcm9tICduYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nOyBcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxucmVnaXN0ZXJFbGVtZW50KCdGYWInLCAoKSA9PiBGYWIpXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIENvcmVNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgeyBwcm92aWRlOiAncGxhdGZvcm0nLCB1c2VWYWx1ZTogcGxhdGZvcm0gfVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=