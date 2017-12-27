
import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000';

// función tubería que se puede expandir a
// más monedas en un futuro para mejar en vista
// a modo de mascara las monedas de diferentes países
// por ahora solo soporta separador de miles (.) condecimales (,)
@Pipe({ name: 'CurrencyMoney' })
export class KsCurrencyMaskPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    this.DECIMAL_SEPARATOR = ',';
    this.THOUSANDS_SEPARATOR = '.';
  }

  transform(value: any | string, fractionSize: number = 0, prefix?: any, round: Boolean = true): string {
    let [integer, fraction = ''] = (value || '').toString()
      .split(this.THOUSANDS_SEPARATOR);

    if (fraction) {
      if (round) {
        const roundCuston = this.redondear(`.${fraction}`, fractionSize).toString().split('');
        const listFraction: any = [];
        roundCuston.forEach((element: any, _index) => {
          if (element !== this.THOUSANDS_SEPARATOR && _index !== 0) {
            listFraction.push(element);
          }
        });

        const stringFraction = listFraction.toString();
        fraction = stringFraction.replace(/,/g, '');
      }
      fraction = fractionSize > 0
        ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
        : '';
      const decimal = fraction;
    }
    if (prefix) {
      integer = integer.replace(/^/gm, `${prefix} `);
    }
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 0, prefix?: string): string {
    let array;
    let integer;
    let fraction = '';
    if (fractionSize !== 0) {
      integer = (value || '').split(this.DECIMAL_SEPARATOR);
      array = integer[0].split('');
      if (integer[1]) {
        fraction = integer[1];
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
          ? this.THOUSANDS_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
          : '';
      }
    } else {
      array = value.split('');
    }
    const listAmount: any = [];
    array.forEach(element => {
      if (element !== this.DECIMAL_SEPARATOR && element !== ' ' && element !== this.THOUSANDS_SEPARATOR) {
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
    return amountReturn + fraction;
  }

  public redondear(numero: any, digitos: number) {
    const base = Math.pow(10, digitos);
    const entero = Math.round(numero * base);
    return entero / base;
  }

}

