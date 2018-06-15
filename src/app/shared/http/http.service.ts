import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ErrorHandlerService} from '../../core/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpService {

  private headers = new HttpHeaders();
  public load: Observable<any>
  private changeLoad = new Subject<any>();
  /**
   * @type {string}
   * @details URL const
   */
  private url = 'http://167.99.157.120/aresp/';

  constructor(private http: HttpClient,
              private router: Router,
              private errorHandler: ErrorHandlerService,
              private spinner: NgxSpinnerService) {
    this.load = this.changeLoad.asObservable();
  }

  /**
   * @param {Observable<any>} http
   * @returns {Observable<Response>}
   * @details Method to configure the response
   */
  private configurateResponse(http: Observable<any> ): Observable<Response> {
    return new Observable<Response>( (subscriber) => {
      http.subscribe((data) => {
        this.spinner.hide();
        subscriber.next(data);
        this.enableLoad(false);
        subscriber.complete();
      }, (error) => {
        this.spinner.hide();
        console.log(error);
          this.errorHandler.handle(error.error.msg);
      });

    });
  }

  /**
   * @param {string} url
   * @param body
   * @returns {Observable<Response>}
   * @details POST method that executes according to url entered by the user
   */
  post(url: string, body: any): Observable<Response> {
    this.spinner.show();
    this.addHeader('Content-Type','application/json')
    return this.configurateResponse(
      this.http.post<any>(this.url + url, body, {headers: this.headers})
    );
  }

  /**
   * @param {string} url
   * @param body
   * @returns {Observable<Response>}
   * @details POST method that executes according to url entered by the user
   */
  put(url: string, body: any): Observable<Response> {
    this.spinner.show();
    return this.configurateResponse(
      this.http.put<any>(this.url + url, body, {headers: this.headers})
    );
  }

  /**
   * @param {string} url
   * @param body
   * @returns {Observable<Response>}
   * @details POST method that executes according to url entered by the user
   */
  get(url: string): Observable<Response> {
    this.spinner.show();
    return this.configurateResponse(
      this.http.get<any>(this.url + url, {headers: this.headers})
    );
  }

  /**
   * @param {string} url
   * @param body
   * @returns {Observable<Response>}
   * @details POST method that executes according to url entered by the user
   */
  delete(url: string): Observable<Response> {
    this.spinner.show();
    return this.configurateResponse(
      this.http.delete<any>(this.url + url, {headers: this.headers})
    );
  }

  /**
   * @param {string} name
   * @param {string} value
   * @details Method of configuration headers
   */
  addHeader(name: string, value: string) {
    this.headers.set(name, value);
  }

  /**
   * @param {boolean} value
   * @details function of broadcast the variable load
   */
  enableLoad(value: boolean) {
    this.changeLoad.next(value);
  }

}
