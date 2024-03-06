import { Component, OnInit } from '@angular/core';

import { GameService } from "../game/game.service"; 

@Component({
  selector: 'app-player-profile',
  standalone: true,
  imports: [],
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.css'
})

export class PlayerProfileComponent implements OnInit{

  constructor(public gameService: GameService){}

  ngOnInit(): void {
    //get user data
  }
}
