import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerService } from '../_services/player.service';


export class AdminGuard implements CanActivate {

  constructor(private router: Router, private playerService: PlayerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("AdminGuard");
    if (this.playerService.isAdmin()) {
      return true;
    }

    if (this.playerService.isLoggedIn()) {
      this.router.navigate(['/profile']);
    }

    this.router.navigate(['/login']);
    return false;
  }

}