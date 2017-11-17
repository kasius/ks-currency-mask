
import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

// función tubería que se puede expandir a
// más monedas en un futuro para mejar en vista
// a modo de mascara las monedas de diferentes países
// por ahora solo soporta separador de miles (.)
@Pipe({ name: 'CurrencyMoney' })
export class KsCurrencyMaskPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = '.';
  }

  transform(value: number | string, fractionSize: number = 0, prefix?: any): string {
    let [integer, fraction = ''] = (value || '').toString()
      .split(this.DECIMAL_SEPARATOR);

    fraction = fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    if (prefix) {
      integer = integer.replace(/^/gm, `${prefix} `);
    }
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 0, prefix?: string): string {
    const array = value.split('');
    const listAmount: any = [];
    array.forEach(element => {
      if (element !== this.DECIMAL_SEPARATOR && element !== ' ') {
        if (prefix) {
          if (prefix.indexOf(element) === -1) {
            listAmount.push(element);
          }
        } else {
          listAmount.push(element);
        }
      }
    });
    const stringAmountParse = listAmount.toString();
    const amountReturn = stringAmountParse.replace(/,/g, '');
    return amountReturn;
  }
}
