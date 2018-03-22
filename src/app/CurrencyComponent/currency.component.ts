import { Component, OnInit} from '@angular/core';
import { CurrencyService} from './currency.service';
import { Utils } from "./utils";

// Copmponent for converting the currency from the souce to target
@Component({
    selector: 'currency-converter',
    templateUrl: './currency.component.html',
    providers: [CurrencyService]
})

export class CurrencyComponent implements OnInit {

    title: string = 'Currency Converter';
    showDisclaimer: boolean = false;
    rates: Array < any > = [];
    fromRates: Object = {};
   
    inputAmount: string = '';
    outputAmount: string = '';
    inputCurrency: string = null;
    outputCurrency: string = null;
    errorMessage: any = null;

    constructor(private currencyService: CurrencyService) {}

    ngOnInit() {
        this.rates = [{ 'id':'CAD', 'value':'1'},{'id':'USD', 'value':'2'},{'id':'EUR', 'value':'3'}]
        this.inputCurrency = Utils.DEFAULT_INPUT_CURRENCY;
        this.outputCurrency = Utils.DEFAULT_OUTPUT_CURRENCY;
    }
    // Get the exchange rates from service call and convert the currency 
    public convertCurrency() {
      
        this.currencyService.getCurrencyRates(this.inputCurrency).subscribe(response => {
            //if service call is success then calculate currency
            if (response.rates) {  
                this.fromRates = response.rates;
                this.calculateCurrency();

            } else {
                //Display error message when service is down
                this.errorMessage = Utils.SERVICE_DOWN_ERROR_MESSAGE;
            }
        }, (error) => {
            //Display error message if any error occurs in service call
            this.errorMessage = Utils.ERROR_IN_SERVICE_CALL + error.statusText;
        });
    }
    //calculate the currency amount for the given input amount and the target currency
    public calculateCurrency() {
        // if both currencies are same display the same output amount as input amount
        if (this.outputCurrency === this.inputCurrency) {
              this.outputAmount = String(Math.round(Number(this.inputAmount)*100)/100);   
        } else {
            //calculate the output amount if there is no error in service call
            if (!this.errorMessage) {   
               this.outputAmount = (this.inputAmount != '') ? (String(Math.round(Number(this.inputAmount) * this.fromRates[this.outputCurrency] * 100) / 100) ) :  (this.outputAmount = '');
             } 
        }  
    }
}