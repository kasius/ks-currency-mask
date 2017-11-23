import { PipeTransform } from '@angular/core';
export declare class KsCurrencyMaskPipe implements PipeTransform {
    private DECIMAL_SEPARATOR;
    private THOUSANDS_SEPARATOR;
    constructor();
    transform(value: any | string, fractionSize?: number, prefix?: any, round?: Boolean): string;
    parse(value: string, fractionSize?: number, prefix?: string): string;
    redondear(numero: any, digitos: number): number;
}
