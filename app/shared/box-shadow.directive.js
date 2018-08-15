"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = /** @class */ (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.onLoaded = function () {
        var tnsView = this.el.nativeElement;
        if (tnsView.android) {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColor(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(2);
        }
        else if (tnsView.ios) {
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(0, 2.0);
            tnsView.ios.layer.shadowOpacity = 0.24;
            tnsView.ios.layer.shadowRadius = 2.0;
        }
    };
    __decorate([
        core_1.HostListener('loaded'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NativeShadowDirective.prototype, "onLoaded", null);
    NativeShadowDirective = __decorate([
        core_1.Directive({ selector: '[nsShadow]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NativeShadowDirective);
    return NativeShadowDirective;
}());
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3gtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwrQkFBOEI7QUFNOUI7SUFFRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRWIsd0NBQVEsR0FBUjtRQUN0QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNuQixJQUNBLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1FBRXRDLENBQUM7SUFDSCxDQUFDO0lBckJ1QjtRQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQzs7Ozt5REFxQnRCO0lBekJVLHFCQUFxQjtRQURqQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO3lDQUdaLGlCQUFVO09BRnZCLHFCQUFxQixDQTBCakM7SUFBRCw0QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGNvbnN0IENHU2l6ZU1ha2U6IGFueTtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25zU2hhZG93XScgfSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe31cblxuICBASG9zdExpc3RlbmVyKCdsb2FkZWQnKSBvbkxvYWRlZCgpe1xuICAgIGNvbnN0IHRuc1ZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCl7ICAgICAgXG4gICAgICBjb25zdFxuICAgICAgc2hhcGUgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlKCk7XG4gICAgICBzaGFwZS5zZXRTaGFwZShhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUuUkVDVEFOR0xFKTtcbiAgICAgIHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuICAgICAgc2hhcGUuc2V0Q29ybmVyUmFkaXVzKDE4KTtcblxuICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKDIpO1xuXG4gICAgfSBlbHNlIGlmICh0bnNWaWV3Lmlvcyl7XG5cbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLm1hc2tUb0JvdW5kcyA9IGZhbHNlO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKS5pb3MuQ0dDb2xvcjtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMCwgMi4wKTtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjI0O1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93UmFkaXVzID0gMi4wXG5cbiAgICB9XG4gIH1cbn0iXX0=