import { NgModule } from '@angular/core';
import { NativeShadowDirective } from './box-shadow.directive';

@NgModule({
  declarations: [NativeShadowDirective],
  exports: [NativeShadowDirective],
})
export class SharedModule { }
