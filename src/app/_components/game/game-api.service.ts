import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Player, PlayerLogIn } from "../../_models/player"
import { Game } from "../../_models/game"

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private apiVersion: string = 'api';
  private apiUrl: string = ""; 

  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.apiUrl = `http://localhost:5011/${this.apiVersion}`;
    } else {
      this.apiUrl = `https://e2sdev.azurewebsites.net/${this.apiVersion}`;
    }
  }
    
  logIn(playerName: string, password: string) : Observable<Player | string> {
    let uri = `${this.apiUrl}/Player/LogIn`;
    let player = new PlayerLogIn(playerName, password);

    return this.http.post<string>(uri, player).pipe(
      catchError(this.handleError)
    );
  } 

  addWin(playerId: string): Observable<any> {
    const uri = `${this.apiUrl}/Player/AddWin`;
    return this.http.get<Player>(uri, { params: { playerId } }).pipe(
      catchError(this.handleError)  
    );
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

  private handleError(error: HttpErrorResponse): string {
    if (isDevMode()) {
      if (error.status === 0) {
        console.error('An error occurred:', error.error);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
    }

    try { 
      return (Object.values(error.error.errors) as string[][])[0][0];
    }
    catch {
      return 'Something bad happened; please try again later.';
    }
  }
}
