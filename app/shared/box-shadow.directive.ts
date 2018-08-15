import { Directive, ElementRef, HostListener } from '@angular/core';
import { Color } from 'color';

declare const android: any;
declare const CGSizeMake: any;

@Directive({ selector: '[nsShadow]' })
export class NativeShadowDirective {

  constructor(private el: ElementRef){}

  @HostListener('loaded') onLoaded(){
    const tnsView = this.el.nativeElement;
    if (tnsView.android){      
      const
      shape = new android.graphics.drawable.GradientDrawable();
      shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
      shape.setColor(android.graphics.Color.WHITE);
      shape.setCornerRadius(18);

      tnsView.android.setBackgroundDrawable(shape);
      tnsView.android.setElevation(2);

    } else if (tnsView.ios){

      tnsView.ios.layer.maskToBounds = false;
      tnsView.ios.layer.shadowColor = new Color('#000000').ios.CGColor;
      tnsView.ios.layer.shadowOffset = CGSizeMake(0, 2.0);
      tnsView.ios.layer.shadowOpacity = 0.24;
      tnsView.ios.layer.shadowRadius = 2.0

    }
  }
}