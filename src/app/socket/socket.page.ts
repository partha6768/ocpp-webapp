import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.page.html',
  styleUrls: ['./socket.page.scss'],
})
export class SocketPage implements OnInit {
  history = true;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged() {

  }

  toggleView(flag) {
    this.history = flag;
  }

  saveSocket() {

  }
}
