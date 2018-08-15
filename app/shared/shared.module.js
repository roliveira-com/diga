"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var box_shadow_directive_1 = require("./box-shadow.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [box_shadow_directive_1.NativeShadowDirective],
            exports: [box_shadow_directive_1.NativeShadowDirective],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsK0RBQStEO0FBTS9EO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBSnhCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDRDQUFxQixDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLDRDQUFxQixDQUFDO1NBQ2pDLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNoYWRvd0RpcmVjdGl2ZSB9IGZyb20gJy4vYm94LXNoYWRvdy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOYXRpdmVTaGFkb3dEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmF0aXZlU2hhZG93RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19