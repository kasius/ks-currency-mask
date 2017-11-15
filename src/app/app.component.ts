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
  title = 'app';
  public amount: Number = 10000;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.formMask = this._fb.group({
      amount: 0
    });
  }
}
