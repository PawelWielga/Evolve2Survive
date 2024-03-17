import { Component, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../_services/player.service';
import { ErrorHandler } from '../../_shared/error.handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginFailed: boolean = false;
  disabled: boolean = false;
  error: string = "";
  isLoggedIn: boolean = false;
  roles: any;

  constructor(private router: Router, private playerService: PlayerService, private errorHandler: ErrorHandler) { }

  logIn(playerName: string, password: string) {
    if (isDevMode()) { console.log("login click"); }

    this.disabled = true;
    this.playerService.login(playerName, password).subscribe({
      next: data => {
        this.playerService.saveUser(data);
        this.disabled = false;
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.playerService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.error = this.errorHandler.handleError(err);
        this.isLoginFailed = true;
        this.disabled = false;
      }
    });
  }

  register() {
    console.log("register click");
    this.router.navigate(["register"]);
  }

  reloadPage(): void {
    window.location.reload();
  }
}
