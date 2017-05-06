import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import { User } from './models/user';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class SDK{
    private sdkUrl = 'http://46.101.247.89:8080/';
    private headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    private options = new RequestOptions({ headers: this.headers }); // Create a request option

    constructor (private http: Http,public snackBar: MdSnackBar) {}

    showSnackBar(message,action,addClass?){
        console.log(message);
        let config = new MdSnackBarConfig();
        config.duration = 10000;
        config.extraClasses = addClass ? addClass : null;
        this.snackBar.open(message, action, config);
    }

    showError(error:any){
        this.showSnackBar(error.json().error,false);
        return Observable.throw(error.json().error || 'Server error');
    }

    toUrl(array?):String{
        let url:String = "";
        console.log(array);

        url = "?";

        let toArray = Object.keys(array);
        for (let i=0;i<toArray.length;i++) {
            if(array[toArray[i]].value instanceof Array && array[toArray[i]].value.length > 1){
                url += array[toArray[i]].title + "=";
                let valueArray = array[toArray[i]].value;
                url += valueArray[0];
                for (let j=1;j<valueArray.length-1;j++) {
                    url += ',' + valueArray[j];
                }
                url += '&';
            } else {
                url += array[toArray[i]].title + "=" + array[toArray[i]].value + "&";
            }
            
        };
        
        console.log(url);
        return url;
    }

    getUsers(body?: any) : Observable<any> {
         let bodyString = this.toUrl(body);
         console.log(bodyString);

         return this.http.get(this.sdkUrl+'users'+bodyString, this.options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => this.showError(error)); //...errors if any
    }

    getReports(body?: any) : Observable<any> {
         let bodyString = this.toUrl(body);
         console.log(bodyString);

         return this.http.get(this.sdkUrl+'reports'+bodyString, this.options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => this.showError(error)); //...errors if any
    }

    newUser(body?: Object) : Observable<any> {
         let bodyString = '';
         if(body){
             bodyString = JSON.stringify(body);
         }
         //console.log(bodyString);

         return this.http.post(this.sdkUrl+'users', bodyString, this.options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => this.showError(error)); //...errors if any
    }

}