import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './models/user';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SDK{

     constructor (private http: Http) {}

     private sdkUrl = 'http://46.101.247.89:9000/'; 

     getUsers(body?: Object) : Observable<User[]> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options = new RequestOptions({ headers: headers }); // Create a request option


         return this.http.post(this.sdkUrl, bodyString, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

}