import { Injectable } from "@angular/core";

import { HttpHeaders,HttpClient,HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from 'rxjs'

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    };

    return new HttpHeaders(headersConfig);
  }

  private getToken():string | null {
    let token = localStorage.getItem('jwt')
    return token;
  }

  private formatParams(params:Record<any,any>):HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] !== '' && params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key]);
      }
    });
    return httpParams
  }

  public get(path:string, params:Record<any,any>):Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, {
      headers: this.setHeaders(),
      params: this.formatParams(params),
    })
  }

  public post(path:string, payload:Object = {}):Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(payload), {
      headers: this.setHeaders()
    })
  }

  public put(path:string, payload:Object = {}):Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, JSON.stringify(payload), {
      headers: this.setHeaders()
    })
  }

  public patch(path:string, payload:Object = {}):Observable<any> {
    return this.http.patch(`${environment.apiUrl}${path}`, JSON.stringify(payload), {
      headers: this.setHeaders()
    })
  }

  public delete(path:string, params:Object = {}):Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`, {
      headers: this.setHeaders(),
      params: this.formatParams(params)
    })
  }

}
