import { Component, OnInit } from '@angular/core';

import { GameService } from "../game/game.service"; 
import { GameApiService } from "../game/game-api.service"; 


@Component({
  selector: 'app-player-profile',
  standalone: true,
  imports: [],
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.css'
})

export class PlayerProfileComponent implements OnInit{

  constructor(public gameService: GameService, private gameApiService: GameApiService){}

  ngOnInit(): void {
    //get user data
  }

  testFunc() {
    var id = this.gameService.player?.id
    if (id != undefined) {
      this.gameApiService.addWin(id).subscribe(response => { 
        if (response.id != null) {
          this.gameService.setPlayer(response);
          return;
        }
      });
    }
    else {
      //jakiś error
    }
  }

  newGame() {
    if (this.gameService.player?.id != undefined) {
      this.gameApiService.startNewGame(this.gameService.player.id).subscribe(response => {
        console.log(response);
       })
    }
  }

}
