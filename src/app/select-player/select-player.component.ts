import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from "../game/game.service"; 
import { GameApiService } from "../game/game-api.service"; 
import { Player } from '../models/player';

import { PlayerProfileComponent } from "../player-profile/player-profile.component"

@Component({
  selector: 'app-select-player',
  standalone: true,
  imports: [
    CommonModule,
    PlayerProfileComponent
  ],
  templateUrl: './select-player.component.html',
  styleUrl: './select-player.component.css',
})

export class SelectPlayerComponent {

  public error: string = "";
  public disabled: boolean = false;
  public player: Player | undefined;

  constructor(public gameService: GameService, private gameApiService: GameApiService) { }

  logIn(playerName: string, password: string) {
    this.error = "";
    this.disabled = true;

    this.gameApiService.logIn(playerName, password).subscribe(data => {   
      if (typeof (data) === "string") {
        this.error += data;
      } else if (data === null) {
        this.error = "Invalid Credentials!";
       }
      else {
        this.gameService.player = data;
      }

      this.disabled = false;
    });
  }

}
