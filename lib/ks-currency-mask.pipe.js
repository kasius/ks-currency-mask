"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PADDING = '000000';
// función tubería que se puede expandir a
// más monedas en un futuro para mejar en vista
// a modo de mascara las monedas de diferentes países
// por ahora solo soporta separador de miles (.)
var KsCurrencyMaskPipe = (function () {
    function KsCurrencyMaskPipe() {
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSANDS_SEPARATOR = '.';
    }
    KsCurrencyMaskPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        var _a = (value || '').toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : '';
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    KsCurrencyMaskPipe.prototype.parse = function (value, fractionSize) {
        var _this = this;
        if (fractionSize === void 0) { fractionSize = 0; }
        var array = value.split('');
        var listAmount = [];
        array.forEach(function (element) {
            if (element !== _this.DECIMAL_SEPARATOR) {
                listAmount.push(element);
            }
        });
        var stringAmountParse = listAmount.toString();
        var amountReturn = stringAmountParse.replace(/,/g, '');
        return amountReturn;
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