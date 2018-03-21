import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Utils } from "./utils";
import {Observable} from 'rxjs/Observable';

// Service to get currency exchange rates from fixer API
@Injectable()
export class CurrencyService {

    constructor(private http: HttpClient) {}
    getCurrencyRates(inputCurrencyType):  Observable<any> {
      
        let url: string;

        // Check input Currency type passed and modify URL
        if (inputCurrencyType) {
            url = Utils.serviceUrl + '?base=' + inputCurrencyType;
        } else {
            url = Utils.serviceUrl;
        }
        // Get currency exchange rates from API
        return this.http.get(url)
        .pipe()
        .catch(this.checkErrors);
        
    }
    //check for errors in service call
    private checkErrors(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
