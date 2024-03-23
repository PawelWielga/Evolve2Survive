import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerService } from '../_services/player.service';

@Injectable({
  providedIn: 'root'
})
  
export class PlayerGuard implements CanActivate {

  constructor(private router: Router, private playerService: PlayerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("PlayerGuard");
    if (this.playerService.isLoggedIn()) {
      return true;
    }
        
    this.router.navigate(['/login']);
    return false;
  }
}