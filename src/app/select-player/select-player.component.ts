import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from "../game/game.service"; 
import { GameApiService } from "../game/game-api.service"; 

@Component({
  selector: 'app-select-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './select-player.component.html',
  styleUrl: './select-player.component.css',
})

export class SelectPlayerComponent {

  public error: string | undefined;

  constructor(public gameService: GameService, private gameApiService: GameApiService) { }

  logIn(playerName: string) {
    this.gameApiService.logIn(playerName).subscribe(response => { 
      if (response.id != null) {
        this.gameService.setPlayer(response);
        return;
      }
  
      this.error = `Invalid playerName: ${playerName}`;
    });
  }

}
