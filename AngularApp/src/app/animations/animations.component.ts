import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [trigger('slkAnimations', [
    state('day', style({
      backgroundColor: 'white'
    })),
    state('noon', style({
      transform: 'TranslateX(0%)',
      backgroundColor: 'orange'
    })),
    state('night', style({
      backgroundColor: 'black',
      height: 0
    })),
    transition('day => noon', animate('5s', keyframes([
      style({ transform: 'TranslateX(-100%)', backgroundColor: 'red' }),
      style({ transform: 'TranslateX(50%)', backgroundColor: 'yellow' }),
      style({ transform: 'TranslateX(0%)', backgroundColor: 'orange' })
    ]))),
    transition('noon => night', animate('1s')),
    transition('night => day', animate('1s')),
  ])]
})
export class AnimationsComponent implements OnInit {

  myState: string = 'day';
  x;

  constructor() { }

  ngOnInit() {
  }

  changeMyState(y) {
    this.x = y;
    if (this.myState == 'day')
      this.myState = 'noon';
    else if (this.myState == 'noon')
      this.myState = 'night';
    else if (this.myState == 'night')
      this.myState = 'day';
  }

}
