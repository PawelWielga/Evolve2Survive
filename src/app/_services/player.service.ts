import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player, PlayerLogIn, PlayerRegister } from '../_models/player';
import { Router } from '@angular/router';

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

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
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
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  getUser(): Player | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  clean(): void {
    window.sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
