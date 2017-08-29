import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service'

@Component({
  selector: 'app-player-data2',
  templateUrl: './player-data2.component.html',
  styleUrls: ['./player-data2.component.css']
})
export class PlayerData2Component implements OnInit {
  players: any[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  addPlayer(newPlayer) {
    this.playerService.addPlayer(newPlayer);
  }

}
