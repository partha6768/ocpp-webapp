import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_service/user-service";
import {CommonService} from "../../_service/common-service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  userName: string;
  turnOnNotification = false;
  constructor(public toastController: ToastController, private userService: UserService, private commonService: CommonService) {
    this.userName = this.commonService.currentUserInfo();
  }

  ngOnInit() {
    this.userService.getUserSettings(this.userName).subscribe((data: any) => {
      if (data.result && data.result.userSettings) {
        this.turnOnNotification = data.result.userSettings.turnOnNotification;
      }
    });
  }

  updateSettings() {
    const request = {
      turnOnNotification: this.turnOnNotification
    };
    this.userService.updateUserSettings(this.userName, request).subscribe((data: any) => {
      if (data.result) {
        this.showToast('<ion-icon name="checkmark-outline"></ion-icon> Settings updated successfully !');
      }
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toast_style',
      color: 'secondary'
    });
    await toast.present();
  }
}
