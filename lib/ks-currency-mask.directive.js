"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ks_currency_mask_pipe_1 = require("./ks-currency-mask.pipe");
var KsCurrencyMaskDirective = (function () {
    function KsCurrencyMaskDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.el = this.elementRef.nativeElement;
    }
    KsCurrencyMaskDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    KsCurrencyMaskDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value, 0);
    };
    KsCurrencyMaskDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value, 0);
    };
    KsCurrencyMaskDirective.prototype.onkeypress = function (e) {
        var value = e.target.value;
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla === 8 || (tecla > 47 && tecla < 58)) {
            return true;
        }
        else {
            return false;
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
    'onFocus': [{ type: core_1.HostListener, args: ['focus', ['$event.target.value'],] },],
    'onBlur': [{ type: core_1.HostListener, args: ['blur', ['$event.target.value'],] },],
    'onkeypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
};
exports.KsCurrencyMaskDirective = KsCurrencyMaskDirective;
//# sourceMappingURL=ks-currency-mask.directive.js.map