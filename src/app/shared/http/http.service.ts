import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import {ErrorHandlerService} from '../../core/error-handler.service';

@Injectable()
export class HttpService {

  private headers = new HttpHeaders();
  public load: Observable<any>
  private changeLoad = new Subject<any>();
  /**
   * @type {string}
   * @details URL const
   */
  private url = 'http://localhost/ARESP-PHP/';

  constructor(private http: HttpClient,
              private router: Router,
              private errorHandler: ErrorHandlerService) {
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
        subscriber.next(data);
        this.enableLoad(false);
        subscriber.complete();
      }, (error) => {
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
