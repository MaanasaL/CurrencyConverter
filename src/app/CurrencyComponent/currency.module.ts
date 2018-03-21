import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule } from '@angular/platform-browser';
import {CurrencyComponent } from './currency.component';
import {InputValidatorDirective } from './inputvalidations.directive';

@NgModule({

    imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    ],
    
  declarations: [CurrencyComponent,InputValidatorDirective],
  providers: [],
  exports:[CurrencyComponent]
})

export class CurrencyModule {}

