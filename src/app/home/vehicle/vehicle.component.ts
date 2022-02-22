import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {UserService} from "../../_service/user-service";
import {CommonService} from "../../_service/common-service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  userVehiclePreferences = [];
  userSelectionFromDB = [];
  userName: string;
  constructor(public modalController: ModalController, private router: Router, private userService: UserService, private commonService: CommonService) {
    this.userName = this.commonService.currentUserInfo();
  }

  ngOnInit() {
    this.userService.getUserVehicle(this.userName).subscribe((data: any) => {
      if (data.result && data.result.length !== 0) {
        this.userSelectionFromDB = data.result.vehicleMapping.evNames;
      }
    });
    this.loadElectricVehicle();
  }

  saveUserPreference() {
    const request = {
      evNames: [this.userSelectionFromDB]
    };
    this.userService.saveUserPreference(this.userName, request).subscribe((data: any) => {
      if (data.result) {
        this.modalController.dismiss();
        this.router.navigate(['/home/search']);
      }
    });
  }

  loadElectricVehicle() {
    this.userService.getAllElectricVehicle().subscribe((data: any) => {
      if (data.result && data.result.length !== 0) {
        data.result.forEach(ev => {
          this.userVehiclePreferences.push({code: ev.code, selected: false});
        });
      }
    });
  }
}
