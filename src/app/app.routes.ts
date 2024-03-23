import { Routes } from '@angular/router';

import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { GameComponent } from './_components/game/game.component';
import { AdminComponent } from './_components/admin/admin.component';

import { PlayerGuard } from './_guards/player.guard.service';
import { AdminGuard } from './_guards/admin.guard.service';

export const routes: Routes = [
    { path:"login", component:LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
    { path: "profile", component: ProfileComponent, canActivate: [PlayerGuard] },
    { path: "game", component: GameComponent, canActivate: [PlayerGuard] },
    { path: '**', redirectTo: 'login' },
];
