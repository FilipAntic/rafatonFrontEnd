import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'My profile',
        icon: 'fa-user-circle'
      }
    ];
  }

}
