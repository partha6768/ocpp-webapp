import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charger-detail',
  templateUrl: './charger-detail.component.html',
  styleUrls: ['./charger-detail.component.scss'],
})
export class ChargerDetailComponent implements OnInit {
  monthOptions = [];
  selectedMonthFilter: string;
  constructor() { }

  ngOnInit() {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    for (let month = 0; month <= monthNames.length - 1; month++) {
      this.monthOptions.push({text: monthNames[month], value: monthNames[month]});
    }
    this.selectedMonthFilter = this.monthOptions[new Date().getMonth()].value;
  }

}
