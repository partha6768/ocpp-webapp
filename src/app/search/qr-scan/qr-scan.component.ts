import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {

  constructor(private router: Router) { }

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
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  segmentChanged($event: CustomEvent) {

  }

  openVehicleModal() {

  }

  goToMap(){
    this.router.navigate(['/home/search']);
  }

  toggleView(flag) {
    this.scanQR = flag;
  }
}
