import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from "@ionic/angular";
import {VehicleComponent} from "../../home/vehicle/vehicle.component";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  currentIndex = 0;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  constructor(public modalController: ModalController) { }

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
