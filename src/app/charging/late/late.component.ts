import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-late',
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.scss'],
})
export class LateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  openChargeCompleteScreen() {
    this.router.navigate(['/charging/charge-complete']);
  }

}
