import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-stop-confirmation',
  templateUrl: './stop-confirmation.component.html',
  styleUrls: ['./stop-confirmation.component.scss'],
})
export class StopConfirmationComponent implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {}

    redirectPage() {
      this.modalController.dismiss();
      this.router.navigate(['/charging/late']);
    }
}
