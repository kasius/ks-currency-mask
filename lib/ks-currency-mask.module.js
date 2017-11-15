"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./app/shared/shared.module.ts
var core_1 = require("@angular/core");
var ks_currency_mask_directive_1 = require("./ks-currency-mask.directive");
var ks_currency_mask_pipe_1 = require("./ks-currency-mask.pipe");
var KsCurrencyMask = (function () {
    function KsCurrencyMask() {
    }
    return KsCurrencyMask;
}());
KsCurrencyMask.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    ks_currency_mask_directive_1.KsCurrencyMaskDirective
                ],
                exports: [
                    ks_currency_mask_directive_1.KsCurrencyMaskDirective
                ],
                providers: [ks_currency_mask_pipe_1.KsCurrencyMaskPipe]
            },] },
];
/** @nocollapse */
KsCurrencyMask.ctorParameters = function () { return []; };
exports.KsCurrencyMask = KsCurrencyMask;
//# sourceMappingURL=ks-currency-mask.module.js.map