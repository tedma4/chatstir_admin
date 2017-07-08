import { Injectable } from "@angular/core"
import { Headers, Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';

import { Area } from "./area"
import { UserLocation } from "./userLocation"

@Injectable()
export class AreasService {
	private auth_token = localStorage.auth_token
	private headers = new Headers({"AUTHORIZATION": this.auth_token, "content-type": "application/json"});
	private url = "http://localhost:4000/"

	constructor(private http: Http) {}
 
	getAreas(): Promise<Area[]> {
    // console.log(this.headers)
		return this.http.get(this.url + "areas", { headers: this.headers } )
     .toPromise()
     .then(response => response.json() as Area[])
       // response.json().data as Area[])
     .catch(this.handleError);
	}

  getDots(): Promise<UserLocation[]> {
    return this.http.get(this.url + "user_locations", {headers: this.headers }) 
    .toPromise()
    .then(response => response.json() as UserLocation[])
    .catch(this.handleError)
  }

  create(fields: any): Promise<Area> {
    return this.http
      .post(this.url + "areas", JSON.stringify(fields), {headers: this.headers})
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
