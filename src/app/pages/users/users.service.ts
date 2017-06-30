import { Injectable } from "@angular/core"
import { Headers, Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';

import { User } from "./user"

@Injectable()
export class UsersService {
	private auth_token = localStorage.auth_token
	private headers = new Headers({"AUTHORIZATION": this.auth_token});
	private url = "http://localhost:3000/"

	constructor(private http: Http) {}
 
	getUsers(): Promise<User[]> {
    // console.log(this.headers)
		return this.http.get(this.url + "users", { headers: this.headers } )
     .toPromise()
     .then(response => response.json() as User[])
       // response.json().data as User[])
     .catch(this.handleError);
	}

  create(title: string): Promise<User> {
    return this.http
      .post(this.url + "users", JSON.stringify({users: {name: name}}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    return this.http
      .put(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(this.url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
