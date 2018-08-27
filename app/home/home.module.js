"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-listview/angular");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var tabs_component_1 = require("./tabs/tabs.component");
var chats_component_1 = require("./chats/chats.component");
var chats_service_1 = require("./chats/chats.service");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                home_routing_module_1.HomeRoutingModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
            ],
            declarations: [
                home_component_1.HomeComponent,
                tabs_component_1.TabsComponent,
                chats_component_1.ChatsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [chats_service_1.ChatsService]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsdUVBQThEO0FBQzlELG9EQUFxRTtBQUNyRSw0REFBK0U7QUFFL0UsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCx3REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQW9CckQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWxCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2dCQUNqQiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjtnQkFDNUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLENBQUM7YUFDcEU7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUM5QixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJ1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy90YWJzLmNvbXBvbmVudCdcbmltcG9ydCB7IENoYXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0cy9jaGF0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0cy9jaGF0cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHsgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJyB9KSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBUYWJzQ29tcG9uZW50LFxuICAgICAgICBDaGF0c0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQ2hhdHNTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==