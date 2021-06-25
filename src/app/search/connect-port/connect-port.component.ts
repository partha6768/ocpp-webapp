import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-connect-port',
  templateUrl: './connect-port.component.html',
  styleUrls: ['./connect-port.component.scss'],
})
export class ConnectPortComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  openLimtScreen() {
    this.router.navigate(['/home/search/set-limit']);
  }

  close() {

  }
}
