import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player} from "../models/player"

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private apiUrl: string = 'http://localhost:5011/api/Game';

  constructor(private http: HttpClient) { }
    
  logIn(playerName: string) : Observable<Player> {
    let uri = `${this.apiUrl}/LogIn?playerName=${playerName}`;
    return this.http.get<Player>(uri);
  } 

  startNewGame(userId: string) : Observable<string> {
    let uri = `${this.apiUrl}/StartNew?userId=${userId}`;
    let opt = { responseType: 'text' as 'text' };

    return this.http.get(uri,opt);
  }

  connectToGame(userId: string, gameId: string) : Observable<boolean> {
    let uri = `${this.apiUrl}/Connect?userId=${userId}&gameId=${gameId}`;
    return this.http.get<boolean>(uri);
  }

}
