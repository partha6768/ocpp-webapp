import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AmmenitiesComponent} from "../ammenities/ammenities.component";
import {Router} from "@angular/router";
import {ReservationComponent} from "../reservation/reservation.component";
import {SiteService} from "../../_service/site-service";
import {CommonService} from "../../_service/common-service";

@Component({
    selector: 'app-charge-station',
    templateUrl: './charge-station.component.html',
    styleUrls: ['./charge-station.component.scss'],
})
export class ChargeStationComponent implements OnInit {
    slideOpts = {
        slidesPerView: 2,
        spaceBetween: 0
    };
    @Input() siteCode: any;
    ammenitieIcons = [];
    connectiorPorts = [];
    siteData: any;
    distanceFromUserLocation = '0 km';
    chargeStations = [];
    constructor(private commonService: CommonService, public siteService: SiteService, public modalController: ModalController, private router: Router) { }

    ngOnInit() {
        this.siteService.getSiteById(this.siteCode).subscribe((items: any) => {
            if (items.result) {
                this.siteData = items.result;
                const origin = localStorage.getItem('userLat') + ',' + localStorage.getItem('userLng');
                const destination = items.result.latLng.lat + ',' + items.result.latLng.lng;
                this.commonService.getDistance(origin, destination).subscribe((data: any) => {
                    if (data.rows && data.rows.length > 0) {
                        this.distanceFromUserLocation = data.rows[0].elements[0].distance.text;
                    }
                });
                this.ammenitieIcons = [];
                if (this.siteData.amenities && this.siteData.amenities.length > 0) {
                    this.siteData.amenities.forEach(a => {
                        this.ammenitieIcons.push({ icon: a.dispName.toLowerCase(), name: a.dispName, distance: a.distance + ' m'});
                    });
                }
            }
        });
        this.siteService.getChargeStationBySiteId(this.siteCode).subscribe((items: any) => {
            if (items.result && items.result.data && items.result.data.length > 0) {
                this.chargeStations = [];
                items.result.data.forEach(data => {
                    let availableConnectorCount = 0;
                    let totalConnectorCount = 0;
                    let connectiorPorts = new Set();
                    data.connectors.forEach(connector => {
                        if (connector.connectorId !== 0) {
                            if (connector.connectorStatus == 'Available') {
                                availableConnectorCount = availableConnectorCount + 1;
                            }
                            totalConnectorCount = totalConnectorCount + 1;
                            connectiorPorts.add(connector.connectorType);
                        }
                    });
                    const chargePoint = {
                        maxKwh: data.maxKwh,
                        availableConnectorCount: availableConnectorCount,
                        totalConnectorCount: totalConnectorCount,
                        pricing: data.pricing.perUnitPrice,
                        connectiorPorts: Array.from(connectiorPorts)
                    };
                    this.chargeStations.push(chargePoint);
                });
            }
        });
        this.connectiorPorts = [
            'assets/icon/port/port-1.svg',
            'assets/icon/port/port-2.svg',
            'assets/icon/port/port-3.svg'
        ];
    }

    async openAmmenitiesModal(ammenitieIcons) {
        const modal = await this.modalController.create({
            component: AmmenitiesComponent,
            cssClass: 'view-ammenities',
            componentProps: { ammenities: ammenitieIcons },
            backdropDismiss: false
        });
        return await modal.present();
    }

    async reservation() {
        this.modalController.dismiss();
        const modal = await this.modalController.create({
            component: ReservationComponent,
            cssClass: 'view-reservation',
            backdropDismiss: false
        });
        return await modal.present();
    }

    scanQR() {
        this.modalController.dismiss();
        this.router.navigate(['/home/search/scan-qr']);
    }
}
