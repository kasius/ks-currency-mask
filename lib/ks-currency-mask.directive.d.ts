import { ElementRef, OnInit, DoCheck } from '@angular/core';
import { KsCurrencyMaskPipe } from './ks-currency-mask.pipe';
export declare class KsCurrencyMaskDirective implements OnInit, DoCheck {
    private elementRef;
    private la;
    private currencyPipe;
    private el;
    prefix: any;
    fraction: any;
    decimal: Boolean;
    constructor(elementRef: ElementRef, la: ElementRef, currencyPipe: KsCurrencyMaskPipe);
    ngOnInit(): void;
    ngDoCheck(): void;
    onFocus(value: any): void;
    onBlur(value: any): void;
    onkeypress(e: any): boolean;
}
