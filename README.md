# ks-currency-mask

## Mask separador of thousands fields of entreda in reactive and nonreactive forms, only modifies aesthetically the amount does not modify ngModel or reactive forms

### try DEMO online http://libraries.carloscifuentes.cl/

## installing the sample

```bash
npm install ks-currency-mask --save
```

## implementation app.module.ts

```bash
import { KsCurrencyMask } from '../../node_modules/ks-currency-mask/lib/ks-currency-mask.module';
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
```

## use
```bash
<input ksCurrentFormatter [(ngModel)]="amount" formControlName="amount" name="amount" type="text">
```

## working with the repo


```bash
git clone https://github.com/kasius/ks-currency-mask.git
cd ks-currency-mask
npm install
ng serve
```