import { Routes } from '@angular/router';
import { PlayerRegisterComponent } from './player-register/player-register.component';
import { SelectPlayerComponent } from './select-player/select-player.component';

export const routes: Routes = [
    {
        path:"",component:SelectPlayerComponent
    },
    {
        path:"register",component:PlayerRegisterComponent
    }
];
