import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {

  constructor(private http: HttpClient) { }

  public get(controller: any): Observable<any> {
    return this.http.get<any>(controller);
  }

  public getReport(controller: any): Observable<any> {

    let HTTPOptions: Object = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'blob'
    }

    return this.http.get<string>(controller, HTTPOptions);
  }

  public getGrid(controller: any): Observable<any> {
    return this.http.get<any>(controller);
  }

  public deleteGrid(controller: any): Observable<any> {
    return this.http.delete(controller);
  }

  public post1(controller: any, user: any): Observable<any> {
    return this.http.post<any>(controller, user);
  }

  public post(controller: any, user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    //headerOptions.set('Content-Type', 'application/json');
    return this.http.post<any>(controller, user, httpOptions);
  }

  public getModulesDTL(controller: any): Observable<any> {
    return this.http.get<any>(controller);
  }

  // Print
  postAndGetResponse(fileName: string) {
    return this.http.get('http://localhost:62292' + '/api/TestExport/DownloadAttachment?fileName=' + fileName, { responseType: 'blob' as 'blob' });
  }


}
