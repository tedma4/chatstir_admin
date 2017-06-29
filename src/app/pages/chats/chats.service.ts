import { Injectable } from "@angular/core"
import { Headers, Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';

import { Chat } from "./chat"

@Injectable()
export class ChatsService {
	private auth_token = localStorage.auth_token
	private headers = new Headers({"AUTHORIZATION": this.auth_token});
	private url = "http://localhost:5000/"

	constructor(private http: Http) {}
 
	getChats(): Promise<Chat[]> {
    // console.log(this.headers)
		return this.http.get(this.url + "chats", { headers: this.headers } )
     .toPromise()
     .then(response => response.json() as Chat[])
       // response.json().data as chat[])
     .catch(this.handleError);
	}

  create(title: string): Promise<Chat> {
    return this.http
      .post(this.url + "chats", JSON.stringify({chats: {name: name}}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Chat)
      .catch(this.handleError);
  }

  update(chat: Chat): Promise<Chat> {
    return this.http
      .put(this.url, JSON.stringify(chat), {headers: this.headers})
      .toPromise()
      .then(() => chat)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(this.url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getChat(id: number): Promise<Chat> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as Chat)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
