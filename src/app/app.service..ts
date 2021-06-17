import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./data/User.model";



@Injectable({
  providedIn: 'root'
})

export class AppService {
  readonly LOGIN_URL = 'https://b2.sareb.co/java_bk/task/login';
  readonly GET_USERS = 'https://b2.sareb.co/java_bk/task/list';
  readonly ADD_USER = 'https://b2.sareb.co/java_bk/task/add'

  constructor(private httpClient: HttpClient) {
  }


  public login(mail: string, password: string): Observable<any>{
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(mail + ":" + password )});

    return new Observable<any>(subscriber => {
      this.httpClient.get(this.LOGIN_URL, {headers, responseType: 'json'})
        .subscribe(
          response => {
            subscriber.next(response);
            subscriber.complete();
          },error => {
            subscriber.error(error)
            subscriber.complete();
          });
    })
  }

  public getUsers(): Observable<any>{
    const headers = new HttpHeaders({TOKEN: '' + localStorage.getItem('token')});
    let params = new HttpParams();
    params = params.append('limit', '5');
    params = params.append('offset', '0');

    return new Observable<any>(subscriber => {
      this.httpClient.get(this.GET_USERS,{params, headers ,responseType: 'json'})
        .subscribe(response => {
            subscriber.next(response);
            subscriber.complete();
          },error => {
            subscriber.error(error)
            subscriber.complete();
          });
    })
  }

  public addUser(userObj: User): Observable<any>{
    const headers = new HttpHeaders({TOKEN: '' + localStorage.getItem('token')});

    return new Observable<any>(subscriber => {
      this.httpClient.post(this.ADD_USER, userObj,{ headers ,responseType: 'json'})
        .subscribe(response => {
          subscriber.next(response);
          subscriber.complete();
        }, error => {
          subscriber.next(error);
          subscriber.complete();
        });
    });
  }

}

