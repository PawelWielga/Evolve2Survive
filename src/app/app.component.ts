import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { HeaderComponent } from './_components/header/header.component'
import { FooterComponent } from './_components/footer/footer.component'

import { PlayerService } from './_services/player.service';
import { EventBusService } from './_shared/event-bus.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;
  
  constructor(
    private playerService: PlayerService,
    private eventBusService: EventBusService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.playerService.isLoggedIn();

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

    if (this.isLoggedIn) {
      const player = this.playerService.getUser();
      //this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = player?.playerName;

      this.router.navigate(["profile"]);
    }
  }

  logout(): void {
    // this.playerService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
        this.playerService.clean();
        this.router.navigate(["/"]);
        window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }
  
}
