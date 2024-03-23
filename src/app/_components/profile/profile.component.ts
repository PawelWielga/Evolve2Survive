import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../_services/player.service';
import { Player } from '../../_models/player';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
  
export class ProfileComponent {

  public player: Player | undefined;

  constructor(private playerService: PlayerService) {
    this.player = this.playerService.getUser()?.player
  }

  newGame() {
    console.log("new game!");
  }
  
}
