// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';

import { KsCurrencyMaskDirective } from './ks-currency-mask.directive';
import { KsCurrencyMaskPipe } from './ks-currency-mask.pipe';

@NgModule({
  declarations: [
    KsCurrencyMaskDirective
  ],
  exports: [
    KsCurrencyMaskDirective
  ],
  providers: [KsCurrencyMaskPipe]
})
export class KsCurrencyMask { }
