import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  players: any;
  playerName:string;
  playerAvatar:string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.httpService.getPlayers().subscribe(
      response => {
        this.players = response;
      })
  }

  addPlayer() {
    debugger;
    let player = {
      name:this.playerName,
      avatar:this.playerAvatar
    };
    this.httpService.addPlayer(player);
  }
}
