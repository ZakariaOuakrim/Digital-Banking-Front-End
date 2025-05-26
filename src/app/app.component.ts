import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-banking';
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(): void {
    this.authService.loadjwtTokenfromLocalStorage();
  }
}
