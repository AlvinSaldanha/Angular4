import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    let myPromise = new Promise((resolve, reject) => {
      console.log('Promise Request Sent');
      let promiseCounter: number = 0;
      setTimeout(function () {
        console.log('Promise timeout Fired')
        promiseCounter++;
        resolve('Promise Data - ' + promiseCounter);
      }, 5000);
    });

    myPromise.then((data) => {
      console.log(data);
    });


    let myObservable = new Observable((observer) => {
      console.log('Observable Request Sent');
      let observableCounter: number = 0;
      setTimeout(function () {
        console.log('observable timeout fired');
        observableCounter++;
        observer.next('Observable Data - ' + observableCounter);
      }, 5000);
    });

    let mySubscription = myObservable.subscribe((data) => {
      console.log(data);
    })

setTimeout(function() {
  console.log('Want to cancel Observable Request');
  //mySubscription.unsubscribe();
}, 2000);

  }

}
