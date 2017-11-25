import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  constructor(private router: Router) { }

  ngOnInit() {

    this.items = [
      {
        label: 'My profile',
        icon: 'fa-user-circle',
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
    this.router.navigate(['/login']);
  }
}
