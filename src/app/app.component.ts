import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { E2sAPIService} from "./e2s-api.service"
import { SelectPlayerComponent } from "./select-player/select-player.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SelectPlayerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  private username = "";
  title = 'Evolve2Survive';

  values: any;
  isConnected: boolean = false;

  constructor(private api: E2sAPIService){ }

  isLoggedIn() { return this.username != ""; }

  startNewGame() {
    this.api.startNewGame("00001").subscribe(data=> {
      this.values = data;
    });
  }

  connectToExistingGame(id:string){
    this.api.connectToGame("00002", id).subscribe(data => {
      this.isConnected = data;
    })
  }

}
