import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class E2sAPIService {
  

  apiUrl = 'http://localhost:5011/api/';

  constructor(private http: HttpClient) { }
    
  startNewGame(userId: string) : Observable<string>{
    let uri = `${this.apiUrl}Game/StartNew?userId=${userId}`;
    let opt = { responseType: 'text' as 'text' };

    return this.http.get(uri,opt);
  }

  connectToGame(userId: string, gameId: string) : Observable<boolean> {
    let uri = `${this.apiUrl}Game/Connect?userId=${userId}&gameId=${gameId}`;
    return this.http.get<boolean>(uri);
  }

}
