import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service'

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  players: any[];
  myPlayerService:PlayerService;

  constructor(private playerService: PlayerService) {

    

   }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  addPlayer(newPlayer) {
    this.playerService.addPlayer(newPlayer);
  }

}
