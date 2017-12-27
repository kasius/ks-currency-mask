import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // variables
  formMask: FormGroup;
  formMaskDecimal: FormGroup;
  formMaskOptions: FormGroup;
  formMaskDecimalSimple: FormGroup;
  title = 'app';
  public configFractionDefault = { fractionSize: 2, round: false };
  public configFraction = { fractionSize: 4, round: true };
  public amount: Number = 10000;
  public amountPrefix$: Number = 10000;
  public amountPrefix: Number = 0;
  public amountPrefixUsd: Number = 2050000;
  public amountPrefixClp: Number = 1000000;
  public amountDecimal: Number = 10000.346564;
  public amounCuston: Number = 10000;
  public amountDecimalSimple: Number = 10000.346564;
  public interval: Boolean = false;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    // init formMaskDecimalSimple
    this.formMaskDecimalSimple = this._fb.group({
      amountDecimalSimple: 0
    });
    // init formMaskDecimal
    this.formMaskDecimal = this._fb.group({
      amountDecimal: 0
    });
    // init formMask
    this.formMask = this._fb.group({
      amount: 0
    });
    // init formMaskOptions
    this.formMaskOptions = this._fb.group({
      amount: 0,
      amountEuro: 0,
      amountUsd: 0,
      amountClp: 0
    });
  }

  detectType() {
    console.log({ type: this.amounCuston });
  }
}
