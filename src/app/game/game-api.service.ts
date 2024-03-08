import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from "../models/player"
import { Game } from "../models/game"

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private apiV: string = 'api';
  private apiUrl: string = ""; 

  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.apiUrl = `http://localhost:5011/${this.apiV}`;
    } else {
      this.apiUrl = `https://e2sdev.azurewebsites.net/${this.apiV}`;
    }
  }
    
  logIn(playerName: string) : Observable<Player> {
    let uri = `${this.apiUrl}/Player/LogIn?playerName=${playerName}`;
    return this.http.get<Player>(uri);
  } 

  addWin(playerId: string): Observable<Player> {
    let uri = `${this.apiUrl}/Player/AddWin?playerId=${playerId}`;
    return this.http.get<Player>(uri);
  }

  startNewGame(playerId: string) : Observable<Game> {
    let uri = `${this.apiUrl}/Game/NewGame`;
    const options = { params: new HttpParams().set('playerId', playerId) }
    
    return this.http.get<Game>(uri, options);
  }

  connectToGame(userId: string, gameId: string) : Observable<boolean> {
    let uri = `${this.apiUrl}/Connect?userId=${userId}&gameId=${gameId}`;
    return this.http.get<boolean>(uri);
  }

}
