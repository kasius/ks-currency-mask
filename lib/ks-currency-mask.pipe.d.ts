import { PipeTransform } from '@angular/core';
export declare class KsCurrencyMaskPipe implements PipeTransform {
    private DECIMAL_SEPARATOR;
    private THOUSANDS_SEPARATOR;
    constructor();
    transform(value: number | string, fractionSize?: number): string;
    parse(value: string, fractionSize?: number): string;
}
