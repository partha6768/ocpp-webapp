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
  peerToPeer = false;
  constructor(public toastController: ToastController, private userService: UserService, private commonService: CommonService) {
    this.userName = this.commonService.currentUserInfo();
  }

  ngOnInit() {
  }

  updateSettings() {
    const request = {
      peerToPeer: this.peerToPeer
    };
  }

    save() {

    }
}
