import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ViewRoutePage} from "../view-route/view-route.page";
import {VehicleComponent} from "../home/vehicle/vehicle.component";
import {Router} from "@angular/router";
import {ChargeStationComponent} from "./charge-station/charge-station.component";
import {UnpaidBillComponent} from "./unpaid-bill/unpaid-bill.component";
import { NearMeComponent } from './near-me/near-me.component';
import {SelectionsComponent} from "./selections/selections.component";
import {CommonService} from "../_service/common-service";
declare let google;

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements AfterViewInit, OnInit{

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  markers: any;
  lat = 40.73061;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions = {
    center: this.coordinates,
    zoom: 12,
    minZoom: 12, maxZoom: 18,
    fullscreenControl: false,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  filterLocation: string;
  locationList = [];

  constructor(public commonService: CommonService, public modalController: ModalController, private router: Router) { }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  ngOnInit() {
    this.openPendingModel();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.markers = [{
        position: new google.maps.LatLng(40.73061, 73.935242),
        map: this.map,
        title: 'CP001',
        icon: 'assets/icon/fast_charger_available.svg'
      },{
        position: new google.maps.LatLng(32.06485, 34.763226),
        map: this.map,
        title: 'CP002',
        icon: 'assets/icon/normal_charger_available.svg'
      },
      {
        position: new google.maps.LatLng(40.73061, -73.935242),
        map: this.map,
        title: 'CP003',
        icon: 'assets/icon/normal_charger_available.svg'
      }
    ];
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.loadAllMarkers();
    });
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });
      //Add click event to open info window on marker
      marker.addListener('click', async () => {
        const modal = await this.modalController.create({
          component: ChargeStationComponent,
          cssClass: 'view-charge-station'
        });
        return await modal.present();
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

  async openVehicleModal() {
    const modal = await this.modalController.create({
      component: VehicleComponent,
      cssClass: 'select-vehicle'
    });
    return await modal.present();
  }

  async openPendingModel() {
    const modal = await this.modalController.create({
      component: UnpaidBillComponent,
      cssClass: 'unpaid-bill'
    });
    await modal.present()
  }

  async openNearMeModal() {
    const modal = await this.modalController.create({
      component: NearMeComponent,
      cssClass: 'near-me'
    });
    return await modal.present();
  }

  async openFilterMeModal() {
    const modal = await this.modalController.create({
      component: SelectionsComponent,
      cssClass: 'main-filter'
    });
    return await modal.present();
  }

  goToScanQR(){
    this.router.navigate(['/home/search/scan-qr']);
  }

  openDetailModal() {
    this.router.navigate(['/charging/in-progress']);
  }

  searchLocation() {
    this.commonService.searchLocation(this.filterLocation).subscribe((data: any) => {
      if (data.results) {
        this.locationList = data.results;
      }
    });
  }
}
