import { Component, OnInit } from '@angular/core';
import {DataService} from "../../_service/data.service";
import {CommonService} from "../../_service/common-service";
import {SiteService} from "../../_service/site-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-charging-limit',
  templateUrl: './charging-limit.component.html',
  styleUrls: ['./charging-limit.component.scss'],
})
export class ChargingLimitComponent implements OnInit {
  section = 'time';
  selectedAmount = 0;
  selectedKWh = 0;
  times = [];
  selectedTimeSlotInMin = 0;
  userLatLng: any;
  qrObj: any;
  constructor(private router: Router, private dataService: DataService, private siteService: SiteService) {
    this.userLatLng = {
      lat: localStorage.getItem('userLat'),
      lng: localStorage.getItem('userLng')
    }
  }

  ngOnInit() {
    const txt = localStorage.getItem('TRANSACTION');
    const txtObj  = JSON.parse(txt);
    if (txtObj == null) {
      this.router.navigate(['/home/search/scan-qr']);
    }
    this.qrObj = txtObj.connectorInfo;
    const x = 30;
    let tt = 0;
    const ap = ['AM', 'PM'];
    for (let i=0;tt<24*60; i++) {
      const hh = Math.floor(tt/60);
      const mm = (tt%60);
      if ((new Date().getHours() <= hh && new Date().getMinutes() <= 30) || (new Date().getHours() <= hh && new Date().getMinutes() <= 60)) {
        this.times.push({
          selected: false,
          value: ("0" + (hh)).slice(-2) + ':' + (mm == 0 ? '00' : mm),
          dspValue: mm == 30 ? '' : ("" + (hh == 0 ? 12 : (hh % 12))).slice(-2) + ap[Math.floor(hh/12)]
        });
      }
      tt = tt + x;
    }
  }

  changeSection(section) {
    this.section = section;
  }

  selectTimeSlot(obj) {
    if (!obj.selected) {
      this.selectedTimeSlotInMin = this.selectedTimeSlotInMin + 30;
    } else if (this.selectedTimeSlotInMin !== 0) {
      this.selectedTimeSlotInMin = this.selectedTimeSlotInMin - 30;
    }
    obj.selected = !obj.selected;
  }

  startCharging() {
    if (this.qrObj === null || this.qrObj === undefined) {
      this.router.navigate(['/home/search/scan-qr']);
    }
    let request = {
      username: sessionStorage.getItem('username'),
      connectorCode: this.qrObj.connectorCode,
      requestedTimeMins: this.selectedTimeSlotInMin,
      pricing: this.qrObj.pricing,
      userLatLng: this.userLatLng,
      estimates: {
        estimatedKwh: this.selectedKWh,
        estimatedCost: this.selectedAmount
      }
    };
    this.siteService.startCharging(request).subscribe((data: any) => {
      if (data.result) {
        const txt = {
          connectorInfo: this.qrObj,
          transactionData: request,
          startChargingData: {
            transactionId: data.result.transactionId,
            startTime: new Date(),
            stopTime: new Date(new Date().getTime() + request.requestedTimeMins * 60000)
          }
        };
        localStorage.setItem('TRANSACTION', JSON.stringify(txt));
        this.router.navigate(['/charging/in-progress', data.result.transactionId]);
      }
    });
  }

  calculateEstimatedValue() {
    this.selectedKWh = this.qrObj.maxKwh * (this.selectedTimeSlotInMin / 60);
    this.selectedAmount = this.selectedKWh * this.qrObj.pricing.perUnitPrice;
  }
}
