"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = /** @class */ (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === null) {
            return;
        }
        if (typeof this.nsShadow === 'string') {
            this.nsShadow = {
                elevation: this.nsShadow ? parseInt(this.nsShadow, 10) : 2,
                shape: 'RECTANGLE',
                color: '#FFFFFF',
                cornerRadius: 20,
            };
        }
    };
    NativeShadowDirective.prototype.onLoaded = function () {
        if (this.nsShadow === null) {
            return;
        }
        var tnsView = this.el.nativeElement;
        if (tnsView.android && typeof this.nsShadow !== 'string') {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable[this.nsShadow.shape]);
            shape.setColor(android.graphics.Color.parseColor(this.nsShadow.color));
            shape.setCornerRadius(this.nsShadow.cornerRadius);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(this.nsShadow.elevation);
        }
        else if (tnsView.ios && typeof this.nsShadow !== 'string') {
            var elevation = parseFloat((this.nsShadow.elevation - 1).toFixed(2));
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(0, elevation);
            tnsView.ios.layer.shadowOpacity = 0.20;
            tnsView.ios.layer.shadowRadius = elevation - 1;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NativeShadowDirective.prototype, "nsShadow", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3gtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwrQkFBOEI7QUFTOUI7SUFVRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRXJDLCtDQUFlLEdBQWY7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDekIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2FBQ2pCLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUV1Qix3Q0FBUSxHQUFSO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUEsQ0FBQztZQUN4RCxJQUNBLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVsRCxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBRTNELElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUVoRCxDQUFDO0lBQ0gsQ0FBQztJQWpEUTtRQUFSLFlBQUssRUFBRTs7MkRBTUo7SUFrQm9CO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDOzs7O3lEQXlCdEI7SUFuRFUscUJBQXFCO1FBRmpDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUM7eUNBWVosaUJBQVU7T0FWdkIscUJBQXFCLENBb0RqQztJQUFELDRCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuaW1wb3J0IHsgTlNzaGFkb3cgfSBmcm9tICcuLi9jb3JlJ1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgY29uc3QgQ0dTaXplTWFrZTogYW55O1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbnNTaGFkb3ddJyB9KVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlU2hhZG93RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIFxuICBASW5wdXQoKSBuc1NoYWRvdz86IHN0cmluZyB8IFxuICAgIHtcbiAgICAgIGVsZXZhdGlvbjogbnVtYmVyLFxuICAgICAgc2hhcGU6ICdSRUNUQU5HTEUnIHwgJ09WQUwnLFxuICAgICAgY29sb3I6IHN0cmluZyxcbiAgICAgIGNvcm5lclJhZGl1czogbnVtYmVyLFxuICAgIH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKXt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgaWYodGhpcy5uc1NoYWRvdyA9PT0gbnVsbCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5uc1NoYWRvdyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubnNTaGFkb3cgPSB7XG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5uc1NoYWRvdyA/IHBhcnNlSW50KHRoaXMubnNTaGFkb3csIDEwKSA6IDIsXG4gICAgICAgIHNoYXBlOiAnUkVDVEFOR0xFJyxcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgICAgY29ybmVyUmFkaXVzOiAyMCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbG9hZGVkJykgb25Mb2FkZWQoKXtcbiAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0bnNWaWV3ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0bnNWaWV3LmFuZHJvaWQgJiYgdHlwZW9mIHRoaXMubnNTaGFkb3cgIT09ICdzdHJpbmcnKXsgICAgICBcbiAgICAgIGNvbnN0XG4gICAgICBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZVt0aGlzLm5zU2hhZG93LnNoYXBlXSk7XG4gICAgICBzaGFwZS5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IodGhpcy5uc1NoYWRvdy5jb2xvcikpO1xuICAgICAgc2hhcGUuc2V0Q29ybmVyUmFkaXVzKHRoaXMubnNTaGFkb3cuY29ybmVyUmFkaXVzKTtcblxuICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKHRoaXMubnNTaGFkb3cuZWxldmF0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MgJiYgdHlwZW9mIHRoaXMubnNTaGFkb3cgIT09ICdzdHJpbmcnKXtcblxuICAgICAgY29uc3QgZWxldmF0aW9uID0gcGFyc2VGbG9hdCgodGhpcy5uc1NoYWRvdy5lbGV2YXRpb24gLSAxKS50b0ZpeGVkKDIpKTtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLm1hc2tUb0JvdW5kcyA9IGZhbHNlO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKS5pb3MuQ0dDb2xvcjtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMCwgZWxldmF0aW9uKTtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjIwO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93UmFkaXVzID0gZWxldmF0aW9uIC0gMVxuXG4gICAgfVxuICB9XG59Il19