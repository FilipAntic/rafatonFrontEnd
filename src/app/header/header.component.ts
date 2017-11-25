import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {

    this.items = [
      {
        label: 'My profile',
        icon: 'fa-user-circle',
        url: '/myProfile'
      },
      {
        label: 'Buy ticket',
        icon: 'fa-calendar',
        url: '/myProfile'
      }
    ];
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
