import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model_login } from 'src/app/components/User/login/login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {

    constructor(private http : HttpClient) { }

    get(controller:any){
        return this.http.get<any>(controller); 
    }

    public post(controller:any, user: Model_login): Observable<any> {
        return this.http.post<any>(controller, user);
      }
}
