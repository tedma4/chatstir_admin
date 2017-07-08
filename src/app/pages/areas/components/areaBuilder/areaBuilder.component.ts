import {Component, ElementRef, ViewChild} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';
import { AreasService } from "../../areas.service"
import { Area } from "../../area"
GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';
GoogleMapsLoader.LIBRARIES = ['drawing']
import { NgUploaderOptions } from 'ngx-uploader';
import {InlineForm} from "./components/inlineForm/inlineForm.component"

@Component({
  selector: 'area-builder',
  styleUrls: ['./areaBuilder.component.scss'],
  templateUrl: './areaBuilder.component.html',
})
export class AreaBuilder {

  @ViewChild(InlineForm)
  private _inlineForm: InlineForm;

  private areas: any;

  private google:any;
  private map:any;
  private drawingManager:any;;
  private polygon_bounds:any;
  private levelColor:any;
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/theme/no-photo.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor(
    private _elementRef: ElementRef,
    private areasService: AreasService) {
  }

  public getAreas(): void {
    this.areasService
    .getAreas()
    .then((data) => {  
      this.areas = data
      this.setPolygons();
    })
  }

  ngAfterViewInit(): void{
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      this.google = google;
      this.map = new google.maps.Map(el, {
        center: new google.maps.LatLng(33.5055259, -112.07474560000003),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.drawingManager = new this.google.maps.drawing.DrawingManager({
        // drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['polygon', 'rectangle']
        },
        // markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
        rectangleOptions: {
          fillColor: '#ffff00',
          fillOpacity: .1,
          strokeWeight: 1,
          clickable: false,
          editable: false,
          zIndex: 1
        },
        polygonOptions: {
          fillColor: '#ffff00',
          fillOpacity: .1,
          strokeWeight: 1,
          clickable: false,
          editable: false,
          zIndex: 1
        }
      });

    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      if (event.type == 'rectangle') {
        var bounds = event.overlay.getBounds();
        this.polygon_bounds = [
          [
            bounds.getNorthEast().lat(), 
            bounds.getNorthEast().lng()
          ], 
          [
            bounds.getSouthWest().lat(), 
            bounds.getSouthWest().lng()
          ]
        ]
      }else if (event.type == 'polygon') {
        var points = event.overlay.getPath().b;
        this.polygon_bounds = points.map(function(event) {
          var latlng = [event.lat(), event.lng()]
          return latlng
        });
      }
      // let form = this._elementRef.nativeElement.querySelector('#areaForm');
      // let form = document.getElementById("areaForm")
      // loop to add the input elements after an overlay is created
      // this.hideInputs = false
      this._inlineForm.hideInputs(this.polygon_bounds)
      
      // this.polygon_bounds.forEach((point) =>
        // {
          // let lat = String(point[0]);
          // let lng = String(point[1]);
          // var point_input = document.createElement("input");
          // point_input.setAttribute("type", "text");
          // point_input.setAttribute("name", "area[area_profile][]");
          // point_input.setAttribute("value", lat + ','  + lng)
          // form.appendChild(point_input)
      // });
      // infowindow.open(map, event.overlay);
    });
    this.levelColor = {
      L0: {
        strokeColor: '#00eebc',
        fillColor: '#00eebc',
      },
      L1: {
        strokeColor: '#00eebc',
        fillColor: '#00eebc',
      },
      L2: {
        strokeColor: '#BFBFBF',
        fillColor: '#BFBFBF',
      },
      L3: {
        strokeColor: '#622662',
        fillColor: '#622662',
      }
    };

    this.getAreas();

    });
  }

  public setPolygons() {
    this.areas.forEach((area) => {
      this.addPolygon(area);
    });
  }

// Construct the polygon.
  addPolygon(feature) {
    let infoWindow = new this.google.maps.InfoWindow;
    var area = new this.google.maps.Polygon({
      paths: feature.coords,
      strokeColor: this.levelColor[feature.level].strokeColor,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: this.levelColor[feature.level].fillColor,
      fillOpacity: 0.1,
      editable: false,
      map: this.map
    });
    this.google.maps.event.addListener(area, "click", function(event) {
      var vertices = this.getPath();
      var contentString = '<b style="color:black">'+ feature.title +'</b><br>' + '<a href="/areas/' + feature.id + '">click me</a><br>' +
          '<p style="color:black">Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
          '</p>';
      // Iterate over the vertices.
      vertices.forEach((i) => {
        contentString += '<p style="color:black;">' + 
          'Coordinate ' + i + ':</p>'
      })

      // Replace the info window's content and position.
      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(this.map);
    });
  }

}













