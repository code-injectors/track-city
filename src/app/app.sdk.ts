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

    getUsers(body?: Object) : Observable<any> {
         let bodyString = '';
         if(body){
             bodyString = JSON.stringify(body);
         }
         //console.log(bodyString);

         return this.http.get(this.sdkUrl+'users'+bodyString, this.options) // ...using post request
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