import { Component, OnInit } from '@angular/core';
import {NgSwitch} from '@angular/common'

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  players: any;
  isActive: boolean;
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.players = {
        player: { name: 'sachin' }
      }
    }, 5000);

  }

  toggleButton() {
    this.isActive = !this.isActive;
  }

  getClass() {
    return this.isActive == true ? 'active' : 'inactive';
  }
  getStyle() {
    if (this.isActive) {
      return {
        'background-color': 'green',
        'font-size': '43px'
      }
    }
    else return {
        'background-color': 'red',
        'font-size': '50px'
      }
  }

}
