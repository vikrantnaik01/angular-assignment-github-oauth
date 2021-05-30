import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  public login(): Observable<any> {
    return this.http.get('https://github.com/login/oauth/authorize');
  }

  // return what comes back from this http call
   public getUserRepos(userName: string) : Observable<any>{
      return this.http.get(`https://api.github.com/users/${userName}/repos`);
  }

  public getUserFollowings (userName: string) : Observable<any> {
    return this.http.get(`https://api.github.com/users/${userName}/following`);
  }

  public getUserFollowers (userName: string) : Observable<any>{
    return this.http.get(`https://api.github.com/users/${userName}/followers`);
  }
}
