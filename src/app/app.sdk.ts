import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class SDK{
    public hideLoading:boolean= true;
    private sdkUrl = 'http://46.101.247.89:8080/';
    private loginUrl = 'http://10.42.0.94:8080/';
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
        this.hideLoading = true;
        console.log(error);
        this.showSnackBar(error,false);
        return Observable.throw(error || 'Server error');
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
                for (let j=1;j<valueArray.length;j++) {
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

    /* Login */

    login(email: string, password: string) : Observable<any> {
        return this.http.post(this.loginUrl+'auth', { username: email, password: password })
                    .map((res:any) => {
                        console.log(this.headers);
                        this.headers = new Headers({ 'Content-Type': 'application/json','Authorization' : 'Bearer ' + res.token});
                        localStorage.setItem('currentUser',res.token);
                        return res.json()
                    }) // ...and calling .json() on the response to return data
                    .catch((error:any) => this.showError(error)); //...errors if any
    } 
  
    logout() {
        localStorage.removeItem('currentUser');
    }
  
    loggedIn() {
        //return tokenNotExpired();
        return localStorage.hasOwnProperty('currentUser');
    }

    /* SDK */

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

    getCategories() : Observable<any> {
         return this.http.get(this.sdkUrl+'categories', this.options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => this.showError(error)); //...errors if any
    }

    getStatus() : Observable<any> {
         return this.http.get(this.sdkUrl+'status', this.options) // ...using post request
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