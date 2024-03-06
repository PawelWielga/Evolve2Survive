import { Component } from '@angular/core';

import { GameService } from "../game/game.service"; 

@Component({
  selector: 'app-select-player',
  standalone: true,
  imports: [ ],
  templateUrl: './select-player.component.html',
  styleUrl: './select-player.component.css',
})

export class SelectPlayerComponent {

  constructor(public gameService: GameService) { }

  logIn(username: string)
  {
    this.gameService.setUsername(username);
  }

}
