import { Injectable } from "@angular/core"
import { Headers, Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';

import { Area } from "./area"

@Injectable()
export class AreasService {
	private auth_token = JSON.parse(localStorage.auth_token)
	private headers = new Headers({'Content-Type': 'application/json', "AUTHORIZATION": this.auth_token});
	private url = "http://localhost:4000/"

	constructor(private http: Http) {}
 
	getAreas(): Promise<Area[]> {
		return this.http.get(this.url + "areas")
     .toPromise()
     .then(response => response.json().data as Area[])
     .catch(this.handleError);
	}

  create(title: string): Promise<Area> {
    return this.http
      .post(this.url + "areas", JSON.stringify({areas: {name: name}}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Area)
      .catch(this.handleError);
  }

  update(area: Area): Promise<Area> {
    return this.http
      .put(this.url, JSON.stringify(area), {headers: this.headers})
      .toPromise()
      .then(() => area)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(this.url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getArea(id: number): Promise<Area> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as Area)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
