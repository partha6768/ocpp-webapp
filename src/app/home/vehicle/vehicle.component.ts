import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  loadSearch() {
    this.modalController.dismiss();
    this.router.navigate(['/home/search']);
  }
}
