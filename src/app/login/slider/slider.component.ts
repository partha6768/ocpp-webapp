import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from "@ionic/angular";
import {VehicleComponent} from "../../home/vehicle/vehicle.component";
import {CommonService} from "../../_service/common-service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  currentIndex = 0;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  constructor(public modalController: ModalController, private commonService: CommonService) {
    this.commonService.getCurrentLocation().then((pos) => {
      localStorage.setItem('userLat', ''+pos.coords.latitude);
      localStorage.setItem('userLng', ''+pos.coords.longitude);
    });
  }

  slideChanged(){
    this.slides.getActiveIndex().then((index)=>{
      this.currentIndex = index;
    });
  }

  ngAfterViewInit(): void {
    this.slideChanged();
  }

  async openVehicleModal() {
    const modal = await this.modalController.create({
      component: VehicleComponent,
      cssClass: 'select-vehicle'
    });
    return await modal.present();
  }

}
