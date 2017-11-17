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
  formMaskOptions: FormGroup;
  title = 'app';
  public amount: Number = 10000;
  public amountPrefix$: Number = 10000;
  public amountPrefix: Number = 123123;
  public amountPrefixUsd: Number = 2050000;
  public amountPrefixClp: Number = 1000000;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
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
}
