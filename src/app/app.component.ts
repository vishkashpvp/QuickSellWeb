import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()
  x: number = 0;
  minValue: number = 0;
  maxValue: number = 1000;

  decrementByOne() {
    if (this.x != this.minValue) this.x--;
    console.log(1);
  }

  incrementByOne() {
    if (this.x != this.maxValue) this.x++;
  }
}
