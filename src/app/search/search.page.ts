import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ViewRoutePage} from "../view-route/view-route.page";

declare let google;

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements AfterViewInit{

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  markers: any;

  //Coordinates to set the center of the map
  lat = 40.73061;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions = {
    center: this.coordinates,
    zoom: 15,
    fullscreenControl: false,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  constructor(public modalController: ModalController) { }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.markers = [{
        position: new google.maps.LatLng(40.73061, 73.935242),
        map: this.map,
        title: 'CP001'
      },{
        position: new google.maps.LatLng(32.06485, 34.763226),
        map: this.map,
        title: 'CP002'
      }
    ];
    //Adding markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  async openRouteModal() {
    const modal = await this.modalController.create({
      component: ViewRoutePage,
      cssClass: 'view-route'
    });
    return await modal.present();
  }
}
