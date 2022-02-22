import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {SelectPortComponent} from "../select-port/select-port.component";
import {DataService} from "../../_service/data.service";
import {SiteService} from "../../_service/site-service";

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {

  constructor(private router: Router, public modalController: ModalController, private dataService: DataService, private siteService: SiteService) { }

  ngOnInit() {}

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  torchEnabled = false;
  tryHarder = false;
  scanQR = true;

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    const chargePointId = this.qrResultString.split('-')[0] + '-' + this.qrResultString.split('-')[1];
    this.siteService.getChargePointById(chargePointId).subscribe((data: any) => {
      if (data.result) {
        this.dataService.updateStartChargeCode({
          connectorCode: this.qrResultString,
          pricing: data.result.pricing
        });
        this.openPortScreen();
      }
    });
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  segmentChanged() {

  }

  openVehicleModal() {

  }

  goToMap(){
    this.router.navigate(['/home/search']);
  }

  toggleView(flag) {
    this.scanQR = flag;
  }

  async openPortScreen() {
    const modal = await this.modalController.create({
      component: SelectPortComponent,
      cssClass: 'select-port'
    });
    return await modal.present();
  }
}
