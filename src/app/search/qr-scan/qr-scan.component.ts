import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController, ToastController} from "@ionic/angular";
import {SelectPortComponent} from "../select-port/select-port.component";
import {DataService} from "../../_service/data.service";
import {SiteService} from "../../_service/site-service";
import {CommonService} from "../../_service/common-service";

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService, public modalController: ModalController, private dataService: DataService, private siteService: SiteService) { }

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
      if (data.result && data.result.length > 0) {
        const tnx = {
          connectorInfo : {
            connectorCode: this.qrResultString,
            pricing: data.result[0].pricing,
            maxKwh: data.result[0].maxKwh
          }
        };
        localStorage.setItem('TRANSACTION', JSON.stringify(tnx));
        this.openPortScreen();
      }
    }, error => {
      this.commonService.showToast('Wrong QR Code');
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
    /*const modal = await this.modalController.create({
      component: SelectPortComponent,
      cssClass: 'select-port'
    });
    return await modal.present();*/
    this.router.navigate(['/home/search/connect-port']);
  }
}
