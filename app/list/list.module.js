"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-listview/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var list_routing_1 = require("./list.routing");
var list_component_1 = require("./list.component");
var list_area_component_1 = require("./list-area/list-area.component");
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                list_routing_1.ListRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
            ],
            declarations: [
                list_component_1.ListComponent,
                list_area_component_1.ListAreaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], ListModule);
    return ListModule;
}());
exports.ListModule = ListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNERBQWdGO0FBQ2hGLHVFQUE4RDtBQUU5RCwrQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELHVFQUFvRTtBQWlCcEU7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWZ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QixzQ0FBNEI7Z0JBQzVCLGdDQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLENBQUM7YUFDbEU7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsdUNBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG5pbXBvcnQgeyBMaXN0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xpc3Qucm91dGluZ1wiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEFyZWFDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtYXJlYS9saXN0LWFyZWEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgIExpc3RSb3V0aW5nTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3QoeyAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIExpc3RBcmVhQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9Il19