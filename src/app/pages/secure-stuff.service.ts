// import { Component } from '@angular/core';
// import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
// import 'rxjs/add/operator/map';

// @Component({
//   selector: 'secure-stuff',
//   providers: [AuthHttp],
//   template: `
//     <button (click)="getSecureStuff()">Get Secure Stuff!</button>
//   `
// })

// export class SecureStuffComponent {
//   stuff: AuthHttp[];
//   constructor(private authHttp: AuthHttp) {}

//   getSecureStuff() {
//     this.authHttp.get('http://localhost:3000/')
//       .map(res => res.json())
//       .subscribe(
//         data => this.stuff = data.stuff,
//         error => console.log(error)
//       );
//   }
// }