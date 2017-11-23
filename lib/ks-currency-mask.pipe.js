"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PADDING = '000';
// función tubería que se puede expandir a
// más monedas en un futuro para mejar en vista
// a modo de mascara las monedas de diferentes países
// por ahora solo soporta separador de miles (.) condecimales (,)
var KsCurrencyMaskPipe = (function () {
    function KsCurrencyMaskPipe() {
        this.DECIMAL_SEPARATOR = ',';
        this.THOUSANDS_SEPARATOR = '.';
    }
    KsCurrencyMaskPipe.prototype.transform = function (value, fractionSize, prefix, round) {
        var _this = this;
        if (fractionSize === void 0) { fractionSize = 0; }
        if (round === void 0) { round = true; }
        var _a = (value || '').toString()
            .split(this.THOUSANDS_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        if (fraction) {
            if (round) {
                var roundCuston = this.redondear("." + fraction, fractionSize).toString().split('');
                var listFraction_1 = [];
                roundCuston.forEach(function (element, _index) {
                    if (element !== _this.THOUSANDS_SEPARATOR && _index !== 0) {
                        listFraction_1.push(element);
                    }
                });
                var stringFraction = listFraction_1.toString();
                fraction = stringFraction.replace(/,/g, '');
            }
            fraction = fractionSize > 0
                ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
                : '';
            var decimal = fraction;
        }
        if (prefix) {
            integer = integer.replace(/^/gm, prefix + " ");
        }
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    KsCurrencyMaskPipe.prototype.parse = function (value, fractionSize, prefix) {
        var _this = this;
        if (fractionSize === void 0) { fractionSize = 0; }
        var array;
        var integer;
        var fraction = '';
        if (fractionSize !== 0) {
            integer = (value || '').split(this.DECIMAL_SEPARATOR);
            array = integer[0].split('');
            if (integer[1]) {
                fraction = integer[1];
                fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
                    ? this.THOUSANDS_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
                    : '';
            }
        }
        else {
            array = value.split('');
        }
        var listAmount = [];
        array.forEach(function (element) {
            if (element !== _this.DECIMAL_SEPARATOR && element !== ' ' && element !== _this.THOUSANDS_SEPARATOR) {
                if (prefix) {
                    if (prefix.indexOf(element) === -1) {
                        listAmount.push(element);
                    }
                }
                else {
                    listAmount.push(element);
                }
            }
        });
        var stringAmountParse = listAmount.toString();
        var amountReturn = stringAmountParse.replace(/,/g, '');
        return amountReturn + fraction;
    };
    KsCurrencyMaskPipe.prototype.redondear = function (numero, digitos) {
        var base = Math.pow(10, digitos);
        var entero = Math.round(numero * base);
        return entero / base;
    };
    return KsCurrencyMaskPipe;
}());
KsCurrencyMaskPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'CurrencyMoney' },] },
];
/** @nocollapse */
KsCurrencyMaskPipe.ctorParameters = function () { return []; };
exports.KsCurrencyMaskPipe = KsCurrencyMaskPipe;
//# sourceMappingURL=ks-currency-mask.pipe.js.map