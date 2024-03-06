import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  public username: string;

  constructor() {
    this.username = "";
  }

  setUsername(username: string) {
    this.username = username;
    //console.log(this.username)
  }
}
