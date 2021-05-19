import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  constructor() { }

  ngOnInit() {}

  slideChanged(){
    this.slides.getActiveIndex().then(
        (index)=>{
          this.currentIndex = index;
        });
  }

}
