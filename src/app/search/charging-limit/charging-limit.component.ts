import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
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

  openPortScreen() {

  }
}
