
import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { KsCurrencyMaskPipe } from './ks-currency-mask.pipe';

@Directive({ selector: '[ksCurrentFormatter]' })
export class KsCurrencyMaskDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: KsCurrencyMaskPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: any) {
    this.el.value = this.currencyPipe.parse(value, 0);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.el.value = this.currencyPipe.transform(value, 0);
  }

  @HostListener('keypress', ['$event'])
  onkeypress(e: any) {
    const value = e.target.value;
    const tecla = (document.all) ? e.keyCode : e.which;
    if (tecla === 8 || (tecla > 47 && tecla < 58)) {
      return true;
    } else {
      return false;
    }
  }

}
