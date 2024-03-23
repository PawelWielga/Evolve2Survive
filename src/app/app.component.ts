import { Component, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { HeaderComponent } from './_components/static/header/header.component'
import { FooterComponent } from './_components/static/footer/footer.component'

import { PlayerService } from './_services/player.service';
import { EventBusService } from './_shared/event-bus.service';
import { Router, RouterOutlet } from '@angular/router';
import { Player } from './_models/player';

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
  public title = "Evolve2Survive";
  public isLoggedIn = false;
  public player: Player | undefined;

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
      this.player = this.playerService.getUser()?.player;

      this.router.navigate(["profile"]);
    }
  }

  logout(): void {
    this.playerService.cleanLocalStorage();
    this.isLoggedIn = this.playerService.isLoggedIn();
    this.router.navigate(["/"]);
  }
  
}
