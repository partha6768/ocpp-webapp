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
import {SiteService} from "../_service/site-service";
import {DataService} from "../_service/data.service";
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
  coordinates: any;
  mapOptions: any;
  filterLocation: string;
  locationList = [];
  availableStationFlag = false;
  fastChargerFlag = false;

  constructor(public commonService: CommonService, private dataService: DataService, public siteService: SiteService, public modalController: ModalController, private router: Router) {
    this.getCurrentLocation();
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  ngOnInit() {
    this.openPendingModel();
    this.dataService.filter.subscribe((obj: any) => {
      console.log(obj);
    });
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.siteService.getAllSites(20.462196, 85.882962,20, '').subscribe((items: any) => {
      this.markers = [];
      if (items.result && items.result.length != 0) {
        items.result.forEach(item => {
          this.markers.push({
            position: new google.maps.LatLng(item.latlng.lat, item.latlng.lng),
            map: this.map,
            title: item.siteDetails.dispName,
            icon: 'assets/icon/fast_charger_available.svg'
          });
        });
      }
    });
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
      this.locationList = [];
      if (data.results) {
        data.results.forEach(i => {
          if (this.filterLocation != i.formatted_address) {
            this.locationList.push(i);
          }
        });
      }
    });
  }

  filterSelected(data) {
    this.filterLocation = data.formatted_address;
    this.focusToPosition(data.geometry.location.lat, data.geometry.location.lng);
    this.locationList = [];
  }

  changeFilter(section) {
    if (section === 'AvailableStation'){
      this.availableStationFlag = !this.availableStationFlag;
    } else if (section === 'FastCharger'){
      this.fastChargerFlag = !this.fastChargerFlag;
    }
  }

  getCurrentLocation() {
    this.commonService.getCurrentLocation().then((pos) => {
      this.focusToPosition(pos.lat, pos.lng);
      this.mapInitializer();
    });
  }

  focusToPosition(lat, lng) {
    this.coordinates = new google.maps.LatLng(lat, lng);
    this.mapOptions = {
      center: this.coordinates,
      zoom: 12,
      minZoom: 12, maxZoom: 18,
      fullscreenControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.mapInitializer();
  }
}
