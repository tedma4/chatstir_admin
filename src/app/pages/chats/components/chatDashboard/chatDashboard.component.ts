import {Component, ElementRef} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';
GoogleMapsLoader.LIBRARIES = ['drawing']

@Component({
  selector: 'chat-dashboard',
  styleUrls: ['./chatDashboard.component.scss'],
  templateUrl: './chatDashboard.component.html',
})
export class ChatDashboard {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(33.5055259, -112.07474560000003),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}