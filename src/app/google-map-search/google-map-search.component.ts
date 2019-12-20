import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-google-map-search',
  templateUrl: './google-map-search.component.html',
  styleUrls: ['./google-map-search.component.css']
})

export class GoogleMapSearchComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  private subscriber: any;
  users: any;

  googleMapSearch: string;

  map: google.maps.Map;
  lat = 32.576925;
  lng = -117.116318;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 13,
  };

  marker: any;

  ngOnInit() {
    this.subscriber = this.http.get('/api/v1/customers').subscribe((data: any) => {
      this.users = Object.keys(data).map(i => data[i]);
      for (let i = 0; i < this.users.length; i++) {
        const element = this.users[i];
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(element.lat, element.lng),
          map: this.map,
        });
      }
    })
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }

}
