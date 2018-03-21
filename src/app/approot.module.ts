
import { NgModule } from '@angular/core';
import { AppRootComponent } from './approot.component';
import  { CurrencyModule} from './CurrencyComponent/currency.module';

@NgModule({
  declarations: [
    AppRootComponent, 
  ],
  imports: [
    CurrencyModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
