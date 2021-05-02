import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-booking-history',
  templateUrl: 'booking-history.page.html',
  styleUrls: ['booking-history.page.scss']
})
export class BookingHistoryPage {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Charging Records',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Last Charged'
      }, {
        text: 'Last 7 Days'
      }, {
        text: 'Monthly'
      }, {
        text: 'Annually'
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
