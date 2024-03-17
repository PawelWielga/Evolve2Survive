import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  playerName: any;
  wins: any;
  loses: any;

  newGame() {
    console.log("new game!");
  }
  
}
