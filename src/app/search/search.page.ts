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
import {UserService} from "../_service/user-service";
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
  userName: string;
  userOnGoingTransactions = [];
  constructor(public commonService: CommonService, private dataService: DataService, public siteService: SiteService, public modalController: ModalController, private router: Router, private userService: UserService) {
    this.commonService.getCurrentLocation().then((pos) => {
      localStorage.setItem('userLat', ''+pos.coords.latitude);
      localStorage.setItem('userLng', ''+pos.coords.longitude);
      this.getCurrentLocation();
    });
    this.userName = this.commonService.currentUserInfo();
  }

  ngAfterViewInit(): void {
    this.dataService.filter.subscribe((obj: any) => {
        this.getFilterData(obj);
    });
    this.dataService.distanceFilter.subscribe((obj: any) => {
      this.getFilterData({
        distance: obj
      });
    });
  }

  ngOnInit() {
    this.getUserOnGoingTxt();
    // this.openPendingModel();
  }

  getUserOnGoingTxt() {
    this.userService.getUserOnGoingTransactions(this.userName).subscribe((data: any) => {
      this.userOnGoingTransactions = [];
      if (data && data.result && data.result.length > 0) {
        data.result.forEach(item => {
          this.userOnGoingTransactions.push(item);
        });
      }
    });
  }

  getFilterData(obj): void {
    let url = '';
    if (obj.chargerType) {
      url += '&chargerType=' + obj.chargerType;
    }
    if (obj.connectorType) {
      url += '&connectorType=' + obj.connectorType;
    }
    if (obj.isAvailable) {
      url += '&status=Available';
    }
    if (!obj && (obj.distance == undefined || obj.distance === null)) {
      obj.distance = 20
    }
    this.siteService.getAllSites(localStorage.getItem('userLat'), localStorage.getItem('userLng'),obj.distance, url).subscribe((items: any) => {
      this.markers = [];
      if (items.result && items.result.length != 0) {
        items.result.forEach(item => {
          this.markers.push({
            position: new google.maps.LatLng(item.latlng.lat, item.latlng.lng),
            map: this.map,
            title: item.code,
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
    if (this.markers) {
      this.markers.forEach(markerInfo => {
        //Creating a new marker object
        const marker = new google.maps.Marker({
          ...markerInfo
        });
        //Add click event to open info window on marker
        marker.addListener('click', async () => {
          const modal = await this.modalController.create({
            component: ChargeStationComponent,
            cssClass: 'view-charge-station',
            componentProps: { siteCode: marker.title }
          });
          return await modal.present();
        });
        //Adding marker to google map
        marker.setMap(this.map);
      });
    }
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

  openDetailModal(transactionId) {
    this.router.navigate(['/charging/in-progress', transactionId]);
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
      this.getFilterData({
        connectorType: this.availableStationFlag
      });
    } else if (section === 'FastCharger'){
      this.fastChargerFlag = !this.fastChargerFlag;
      this.getFilterData({
        chargerType: this.fastChargerFlag
      });
    }
  }

  getCurrentLocation() {
    this.focusToPosition(localStorage.getItem('userLat'), localStorage.getItem('userLng'));
    this.getFilterData({
      distance: 20
    });
  }

  focusToPosition(lat, lng) {
    this.mapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 15,
      minZoom: 3, maxZoom: 15,
      fullscreenControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.getFilterData({
      distance: 20
    });
  }
}
