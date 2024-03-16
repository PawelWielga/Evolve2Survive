import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  public player: Player | any;

  constructor() { }

  setPlayer(player: Player) {
    this.player = player;
  }

}
