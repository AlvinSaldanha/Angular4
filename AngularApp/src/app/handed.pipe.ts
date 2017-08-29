import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handed'
})
export class HandedPipe implements PipeTransform {

  transform(players: any[], handed: string): any {
    console.log(players);
    console.log(handed);
    return players.filter(function(player){
      if(handed =='undefined' || handed=='both')
      return true;
      else{
        return player.handed ==handed;
      }
    });
  }

}
