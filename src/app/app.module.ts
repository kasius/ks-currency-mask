import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { KsCurrencyMask } from './ks-currency-mask/ks-currency-mask.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    KsCurrencyMask
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
