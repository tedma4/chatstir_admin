import {Component, ElementRef} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'area-dashboard',
  styleUrls: ['./areaDashboard.component.scss'],
  templateUrl: './areaDashboard.component.html',
})
export class AreaDashboard {

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