import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers: HttpHeaders;
  headersOutput: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.headersOutput = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });
  }

  send(url: string, params: any = {}): Observable<any> {
    return new Observable(observer => {
      this._http
        .post(environment.API_ENDPOINT + url, params, {
          headers: this.headers,
          responseType: 'json',
          withCredentials: true,
        }) // withCredentials: cookie許可
        .subscribe(
          res => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
        );
    });
  }

  sendOutput(url: string, params: any = [{}]): Observable<any> {
    let formParams = new HttpParams();
    for (let i = 0; i < params.length; i++) {
      const paramData = params[i];
      Object.keys(paramData).forEach(key => {
        formParams = formParams.append(key, paramData[key]);
      });
    }

    return new Observable(observer => {
      this._http
        .post(environment.API_ENDPOINT + url, formParams, {
          headers: this.headersOutput,
          responseType: 'blob',
          withCredentials: true,
        })
        .subscribe(
          res => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
        );
    });
  }

  sendFileUpload(url: string, data, params: any = [{}]): Observable<any> {

    let formParams = new HttpParams();

    for (let i = 0; i < params.length; i++) {
      const paramData = params[i];
      Object.keys(paramData).forEach(key => {
        formParams = formParams.append(key, paramData[key]);
      });
    }

    return new Observable(observer => {
      this._http
        .post(environment.API_ENDPOINT + url + '?' + formParams.toString(), data, {
          responseType: 'json',
          withCredentials: true,
        })
        .subscribe(
          res => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
        );
    });
  }
}
