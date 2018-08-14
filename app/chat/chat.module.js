"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var forms_1 = require("nativescript-angular/forms");
var chat_routing_1 = require("./chat.routing");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsdUVBQThEO0FBQzlELG9EQUFxRTtBQUVyRSwrQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELG1GQUFnRjtBQUNoRiw2RUFBMEU7QUFrQjFFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFoQnRCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGdDQUFpQjtnQkFDakIsK0JBQXVCO2dCQUN2Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQzthQUNsRTtZQUNELFlBQVksRUFBRTtnQkFDWiw4QkFBYTtnQkFDYiwrQ0FBcUI7Z0JBQ3JCLDJDQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDaGF0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NoYXQucm91dGluZ1wiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZXNBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy1hcmVhL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VCb3hDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtYm94L21lc3NhZ2UtYm94LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ2hhdFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7ICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcycgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXRDb21wb25lbnQsXG4gICAgTWVzc2FnZXNBcmVhQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdE1vZHVsZSB7IH1cbiJdfQ==