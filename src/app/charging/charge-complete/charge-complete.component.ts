import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-charge-complete',
  templateUrl: './charge-complete.component.html',
  styleUrls: ['./charge-complete.component.scss'],
})
export class ChargeCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToPayment() {
    this.router.navigate(['/charging/payment-complete']);
  }
}
