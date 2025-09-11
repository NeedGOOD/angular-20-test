import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  loggedUserName: string = '';
  router = inject(Router);

  constructor(private masterService: Master) {
    this.readLoggedData();

    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    });
  }

  readLoggedData() {
    const loggedData = localStorage.getItem('angular20user');

    if (loggedData != null) {
      this.loggedUserName = loggedData;
    }
  }

  onLogOut() {
    localStorage.removeItem('angular20user');
    this.readLoggedData();
    this.loggedUserName = '';
    this.router.navigateByUrl('login');
  }
}
