import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component";

import { SelectPlayerComponent } from "./select-player/select-player.component"
import { PlayerProfileComponent } from "./player-profile/player-profile.component"

import { GameService } from "./game/game.service"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SelectPlayerComponent,
    PlayerProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  constructor(
    public gameService: GameService,
    // private api: E2sAPIService
  ) { }
  
  public stringEmpty: string = "";

  // values: any;
  // isConnected: boolean = false;

  // startNewGame() {
  //   this.api.startNewGame("00001").subscribe(data=> {
  //     this.values = data;
  //   });
  // }

  // connectToExistingGame(id:string){
  //   this.api.connectToGame("00002", id).subscribe(data => {
  //     this.isConnected = data;
  //   })
  // }

}
