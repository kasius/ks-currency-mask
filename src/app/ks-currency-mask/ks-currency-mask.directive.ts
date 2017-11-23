
import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';
import { KsCurrencyMaskPipe } from './ks-currency-mask.pipe';

@Directive({ selector: '[ksCurrentFormatter]' })
export class KsCurrencyMaskDirective implements OnInit {

  private el: HTMLInputElement;
  @Input('prefix') prefix: any;
  @Input('fraction') fraction: any = { fractionSize: 2, round: false };
  @Input('decimal') decimal: Boolean = false;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: KsCurrencyMaskPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value, this.fraction.fractionSize, this.prefix, this.fraction.round);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: any) {
    this.el.value = this.currencyPipe.parse(value, this.fraction.fractionSize, this.prefix);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.el.value = this.currencyPipe.transform(value, this.fraction.fractionSize, this.prefix, this.fraction.round);
  }

  @HostListener('keypress', ['$event'])
  onkeypress(e: any) {
    const value = e.target.value;
    const tecla = (document.all) ? e.keyCode : e.which;
    if (this.decimal) {
      const countCodeKey46 = value.split('.').length - 1;
      if (tecla === 8 || (tecla > 47 && tecla < 58) || (tecla === 46 && countCodeKey46 === 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (tecla === 8 || (tecla > 47 && tecla < 58)) {
        return true;
      } else {
        return false;
      }
    }
  }

}
