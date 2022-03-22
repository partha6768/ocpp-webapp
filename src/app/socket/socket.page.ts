import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.page.html',
  styleUrls: ['./socket.page.scss'],
})
export class SocketPage implements OnInit {
  history = true;
  monthOptions = [];
  chargerOptions = [];
  selectedMonthFilter: string;
  selectedCharger: string;
  constructor(private router: Router) { }

  ngOnInit() {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    for (let month = 0; month <= monthNames.length - 1; month++) {
      this.monthOptions.push({text: monthNames[month], value: monthNames[month]});
    }
    this.selectedMonthFilter = this.monthOptions[new Date().getMonth()].value;
  }

  segmentChanged() {

  }

  toggleView(flag) {
    this.history = flag;
  }

  saveSocket() {
    this.router.navigate(['/socket/scan-qr']);
  }

    showDetail() {

    }
}
