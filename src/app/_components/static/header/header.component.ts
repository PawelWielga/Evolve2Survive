import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AppComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  public title = "Evolve To Survive"
  constructor(public appComponent: AppComponent) {

   }
  
  logout() {
    this.appComponent.logout();
  }

}
