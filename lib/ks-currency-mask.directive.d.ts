import { ElementRef, OnInit } from '@angular/core';
import { KsCurrencyMaskPipe } from './ks-currency-mask.pipe';
export declare class KsCurrencyMaskDirective implements OnInit {
    private elementRef;
    private currencyPipe;
    private el;
    prefix: any;
    fraction: any;
    decimal: Boolean;
    constructor(elementRef: ElementRef, currencyPipe: KsCurrencyMaskPipe);
    ngOnInit(): void;
    onFocus(value: any): void;
    onBlur(value: any): void;
    onkeypress(e: any): boolean;
}
