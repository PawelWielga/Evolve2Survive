import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerLogIn, PlayerLogInResponse, PlayerRegister } from '../_models/player';
import { Router } from '@angular/router';
import { UserRoles } from '../_enums/user.roles.enum'

//TODO: przenieść to do innego api
const PLAYER_API = 'https://localhost:5011/api/Player/';
const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
export class PlayerService {
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private httpPost(url: string, body: object = { }): Observable<any>{
    return this.http.post(url, body, httpOptions);
  }

  login(playerName: string, password: string): Observable<any> {
    let url = PLAYER_API + 'LogIn'
    let player = new PlayerLogIn(playerName, password);
    return this.httpPost(url, player);
  }

  //TODO: zmieniać local/sesion storage w zależności od checkBoxa remember me
  saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  register(playerName: string, password: string, confirmPassword: string): Observable<any> {
    let url = PLAYER_API + 'Register'
    let player = new PlayerRegister(playerName, password, confirmPassword);
    return this.httpPost(url, player);
  }

  logout(): Observable<any> {
    var url = PLAYER_API + 'signout';
    return this.httpPost(url);
  }

  refreshToken() {
    let url = PLAYER_API + 'refreshtoken';
    return this.httpPost(url);
  }

  isLoggedIn(): boolean {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  isAdmin(): boolean {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      let parsed: PlayerLogInResponse;
      parsed = JSON.parse(user);

      if (parsed.player.role == UserRoles.Admin) {
        return true;
      }
      
      return false;
    }

    return false;
  }

  getUser(): PlayerLogInResponse | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  cleanLocalStorage(): void {
    window.localStorage.clear();
    this.router.navigate(["/"]);
  }
}
