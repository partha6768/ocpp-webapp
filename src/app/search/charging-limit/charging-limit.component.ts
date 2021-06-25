import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charging-limit',
  templateUrl: './charging-limit.component.html',
  styleUrls: ['./charging-limit.component.scss'],
})
export class ChargingLimitComponent implements OnInit {
  section = 'time';

  constructor() { }

  ngOnInit() {}

  changeSection(section) {
    this.section = section;
  }

  selectTimeSlot($event: MouseEvent) {
    
  }

  openPortScreen() {

  }
}
