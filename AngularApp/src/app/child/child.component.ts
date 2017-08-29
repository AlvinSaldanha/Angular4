import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentValue: string;
  @Output() childValueChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

  CallReferenceMethod(data){
    alert(data);
  }

  fireChildChangeEvent(childValue) {
    console.log(childValue);
    this.childValueChange.emit(childValue);
  }

}
