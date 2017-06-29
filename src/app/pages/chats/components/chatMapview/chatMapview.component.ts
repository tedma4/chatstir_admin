import {Component, ElementRef} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'chat-mapview',
  styleUrls: ['./chatMapview.component.scss'],
  templateUrl: './chatMapview.component.html',
})
export class ChatMapview {

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