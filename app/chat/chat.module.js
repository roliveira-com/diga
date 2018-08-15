"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var forms_1 = require("nativescript-angular/forms");
var chat_routing_1 = require("./chat.routing");
var shared_module_1 = require("../shared/shared.module");
var chat_component_1 = require("./chat.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var message_box_component_1 = require("./message-box/message-box.component");
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                chat_routing_1.ChatRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({ 'mdi': 'material-design-icons.css' }),
            ],
            declarations: [
                chat_component_1.ChatComponent,
                messages_area_component_1.MessagesAreaComponent,
                message_box_component_1.MessageBoxComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsdUVBQThEO0FBQzlELG9EQUFxRTtBQUVyRSwrQ0FBbUQ7QUFDbkQseURBQXVEO0FBQ3ZELG1EQUFpRDtBQUNqRCxtRkFBZ0Y7QUFDaEYsNkVBQTBFO0FBbUIxRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBakJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QixnQ0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLCtCQUF1QjtnQkFDdkIsNkNBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLENBQUM7YUFDbEU7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2hhdFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jaGF0LnJvdXRpbmdcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VzQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZXMtYXJlYS9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlQm94Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWJveC9tZXNzYWdlLWJveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIENoYXRSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHsgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJyB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhdENvbXBvbmVudCxcbiAgICBNZXNzYWdlc0FyZWFDb21wb25lbnQsXG4gICAgTWVzc2FnZUJveENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxuIl19