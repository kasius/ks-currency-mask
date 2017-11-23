"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ks_currency_mask_pipe_1 = require("./ks-currency-mask.pipe");
var KsCurrencyMaskDirective = (function () {
    function KsCurrencyMaskDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.fraction = { fractionSize: 2, round: true };
        this.decimal = false;
        this.el = this.elementRef.nativeElement;
    }
    KsCurrencyMaskDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value, this.fraction.fractionSize, this.prefix, this.fraction.round);
    };
    KsCurrencyMaskDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value, this.fraction.fractionSize, this.prefix);
    };
    KsCurrencyMaskDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value, this.fraction.fractionSize, this.prefix, this.fraction.round);
    };
    KsCurrencyMaskDirective.prototype.onkeypress = function (e) {
        var value = e.target.value;
        var tecla = (document.all) ? e.keyCode : e.which;
        if (this.decimal) {
            var countCodeKey46 = value.split('.').length - 1;
            if (tecla === 8 || (tecla > 47 && tecla < 58) || (tecla === 46 && countCodeKey46 === 0)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (tecla === 8 || (tecla > 47 && tecla < 58)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return KsCurrencyMaskDirective;
}());
KsCurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{ selector: '[ksCurrentFormatter]' },] },
];
/** @nocollapse */
KsCurrencyMaskDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: ks_currency_mask_pipe_1.KsCurrencyMaskPipe, },
]; };
KsCurrencyMaskDirective.propDecorators = {
    'prefix': [{ type: core_1.Input, args: ['prefix',] },],
    'fraction': [{ type: core_1.Input, args: ['fraction',] },],
    'decimal': [{ type: core_1.Input, args: ['decimal',] },],
    'onFocus': [{ type: core_1.HostListener, args: ['focus', ['$event.target.value'],] },],
    'onBlur': [{ type: core_1.HostListener, args: ['blur', ['$event.target.value'],] },],
    'onkeypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
};
exports.KsCurrencyMaskDirective = KsCurrencyMaskDirective;
//# sourceMappingURL=ks-currency-mask.directive.js.map