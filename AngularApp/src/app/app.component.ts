import { Component } from '@angular/core';
import {ShowComplexSum} from './modules/calculator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //ShowComplexSum(10, 20);
    this.SquareRoot(10000);
    this.mySquareRoot(10000);
  }

  //@log
  SquareRoot(x: number) {
    return Math.sqrt(x);
  }

  //@log
  mySquareRoot(x: number) {
    return x * x;
  }

  title = 'app works!';
}


function time(target, key, descriptor) {
  let originalFuntion = descriptor.value;
  descriptor.value = function (...args) {
    console.log('arguments passed to the function ' + key + 'is ' + args);
    console.time(key);
    let value = originalFuntion(...args);
    console.timeEnd(key);
    return value;
  }
}


function log(target, key, descriptor) {
  let originalFuntion = descriptor.value;
  descriptor.value = function (...args) {
    console.log('Logging ' + key + 'is ' + args);
   
    let value = originalFuntion(...args);
  
    return value;
  }
}
