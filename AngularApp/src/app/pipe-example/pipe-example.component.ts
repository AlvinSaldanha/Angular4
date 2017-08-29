import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  players: any[];
  constructor() { }

  ngOnInit() {
    this.players = [
      { firstName: 'Sachin', lastName: 'Tendulkar', handed: 'right' },
      { firstName: 'Sourav', lastName: 'Ganguly', handed: 'left' },
      { firstName: 'Virat', lastName: 'Kohli', handed: 'right' },
      { firstName: 'Yuvraj', lastName: 'Singh', handed: 'left' },
      { firstName: 'Rohit', lastName: 'Sharma', handed: 'right' },
      { firstName: 'Shikar', lastName: 'Dhawan', handed: 'left' }
    ]
  }

}
