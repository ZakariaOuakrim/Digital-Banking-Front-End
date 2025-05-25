import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username!: string;
  constructor(public authService : AuthService,private router:Router) { }
  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
