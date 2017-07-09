import {Component, ElementRef} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';
import { Chat } from "../../chat"
import { ChatsService } from "../../chats.service"
GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';
GoogleMapsLoader.LIBRARIES = ['drawing']

@Component({
  selector: 'chat-mapview',
  styleUrls: ['./chatMapview.component.scss'],
  templateUrl: './chatMapview.component.html',
})
export class ChatMapview {
  private alldots: Chat[];
  private selectedDot: Chat;
  private google:any;
  private icons:any;
  private map:any;

  constructor(
    private _elementRef:ElementRef,
    private chatsService: ChatsService ) {}
    // private usersService: UsersService ) {}

  public getDots(): void {
    this.chatsService
    .getChats()
    .then((data) => {
      this.alldots = data
      this.setMarkers();
    })
  }

  ngAfterViewInit(): void{
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      this.google = google;
      this.map = new google.maps.Map(el, {
        center: new google.maps.LatLng(33.5055259, -112.07474560000003),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.icons = {
        user: {
          icon: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png"
        },
        last: {
          icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
      };
      this.getDots();
    });
  }

  public setMarkers(){
    this.alldots.forEach((dot)=>{
      this.addMarker(dot);
    });
  }

  public addMarker(feature) {
    let infoWindow = new this.google.maps.InfoWindow;
    var marker = new this.google.maps.Marker({
      position: new this.google.maps.LatLng(feature.location[1], feature.location[0]),
      // position: {lat: feature.location[1], long: feature.location[0]},
      icon: this.icons.user.icon,
      map: this.map
    });
    this.google.maps.event.addListener(marker, "click", (event) => {
        console.log(marker.position.toString());
        // this.getUser(feature, infoWindow)
    });
    return marker;
  }

  // public getUser(userLoc: any, infoWindow: any): void {
  //   this.chatsService.getUser(userLoc.id)
  //   .then(
  //     (data) => {
  //       this.selectedDot = data;

  //       // var contentString = "stuff"
  //       var contentString = '<p style="color:black;">' + this.selectedDot.user_name + '</p>' + '<IMG BORDER="0" WIDTH=80px HEIGHT=80px ALIGN="Left" SRC="' + this.selectedDot.thumb_avatar + '">';
  //       // Replace the info window's content and position.
  //       infoWindow.setContent(contentString);
  //       infoWindow.setPosition(new this.google.maps.LatLng(userLoc.location[1], userLoc.location[0]));
  //       infoWindow.open(this.map);
  //       return infoWindow
  //   })
  // }

}