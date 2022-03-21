import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

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
    this.goToAddCharger();
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  goToAddCharger(){
    this.router.navigate(['/socket/settings']);
  }

  toggleView(flag) {
    this.scanQR = flag;
  }

}
