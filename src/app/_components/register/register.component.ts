import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private router: Router) { }
error: any;
register(arg0: string,arg1: string) {
  console.log("register click");
}
  back() {
    console.log("back click");
    this.router.navigate(["/"]);
}
disabled: any;

}
