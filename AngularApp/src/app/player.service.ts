import { Injectable } from '@angular/core';
import {FamilyService} from './family.service'

@Injectable()
export class PlayerService {
  players:any[];
  constructor(private familyService:FamilyService) {

    this.init();
  }

  init() {
    this.players = ['sachin', 'sourav', 'virat'];
  }

getPlayers(){
  return this.players;
}

addPlayer(player){
  this.players.push(player);
}

}
