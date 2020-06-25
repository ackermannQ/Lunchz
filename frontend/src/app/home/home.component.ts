import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Role } from '../model/role';
import { User } from '../model/users';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;

  showMenu = false;
  darkModeActive = true;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService, private router: Router) {
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }

  toggleMenu() {
    if (!this.showMenu) {
        this.showMenu = true;
    } else {
        this.showMenu = false;
    }
}

  modeToggleSwitch() {
    if (!this.darkModeActive) {
        this.darkModeActive = true;
    } else {
        this.darkModeActive = false;
    }
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
