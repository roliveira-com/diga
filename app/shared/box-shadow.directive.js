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
        core_1.Directive({ selector: 'nsShadow' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NativeShadowDirective);
    return NativeShadowDirective;
}());
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3gtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwrQkFBOEI7QUFPOUI7SUFVRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRXJDLCtDQUFlLEdBQWY7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDekIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2FBQ2pCLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUV1Qix3Q0FBUSxHQUFSO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUEsQ0FBQztZQUN4RCxJQUNBLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVsRCxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBRTNELElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUVoRCxDQUFDO0lBQ0gsQ0FBQztJQWpEUTtRQUFSLFlBQUssRUFBRTs7MkRBTUo7SUFrQm9CO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDOzs7O3lEQXlCdEI7SUFuRFUscUJBQXFCO1FBRmpDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7eUNBWVYsaUJBQVU7T0FWdkIscUJBQXFCLENBb0RqQztJQUFELDRCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGNvbnN0IENHU2l6ZU1ha2U6IGFueTtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbnNTaGFkb3cnIH0pXG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgXG4gIEBJbnB1dCgpIG5zU2hhZG93Pzogc3RyaW5nIHwgXG4gICAge1xuICAgICAgZWxldmF0aW9uOiBudW1iZXIsXG4gICAgICBzaGFwZTogJ1JFQ1RBTkdMRScgfCAnT1ZBTCcsXG4gICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgY29ybmVyUmFkaXVzOiBudW1iZXIsXG4gICAgfTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe31cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBpZih0aGlzLm5zU2hhZG93ID09PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm5zU2hhZG93ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5uc1NoYWRvdyA9IHtcbiAgICAgICAgZWxldmF0aW9uOiB0aGlzLm5zU2hhZG93ID8gcGFyc2VJbnQodGhpcy5uc1NoYWRvdywgMTApIDogMixcbiAgICAgICAgc2hhcGU6ICdSRUNUQU5HTEUnLFxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICBjb3JuZXJSYWRpdXM6IDIwLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdsb2FkZWQnKSBvbkxvYWRlZCgpe1xuICAgIGlmICh0aGlzLm5zU2hhZG93ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRuc1ZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCAmJiB0eXBlb2YgdGhpcy5uc1NoYWRvdyAhPT0gJ3N0cmluZycpeyAgICAgIFxuICAgICAgY29uc3RcbiAgICAgIHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICAgICAgc2hhcGUuc2V0U2hhcGUoYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlW3RoaXMubnNTaGFkb3cuc2hhcGVdKTtcbiAgICAgIHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcih0aGlzLm5zU2hhZG93LmNvbG9yKSk7XG4gICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXModGhpcy5uc1NoYWRvdy5jb3JuZXJSYWRpdXMpO1xuXG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgIHRuc1ZpZXcuYW5kcm9pZC5zZXRFbGV2YXRpb24odGhpcy5uc1NoYWRvdy5lbGV2YXRpb24pO1xuXG4gICAgfSBlbHNlIGlmICh0bnNWaWV3LmlvcyAmJiB0eXBlb2YgdGhpcy5uc1NoYWRvdyAhPT0gJ3N0cmluZycpe1xuXG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBwYXJzZUZsb2F0KCh0aGlzLm5zU2hhZG93LmVsZXZhdGlvbiAtIDEpLnRvRml4ZWQoMikpO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIubWFza1RvQm91bmRzID0gZmFsc2U7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dDb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpLmlvcy5DR0NvbG9yO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCBlbGV2YXRpb24pO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuMjA7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dSYWRpdXMgPSBlbGV2YXRpb24gLSAxXG5cbiAgICB9XG4gIH1cbn0iXX0=