import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import { UserService } from '../../services/user.service';
import {AuthService} from '../../auth/auth.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info: any;
  isLoggedIn = false;
  authority: string;
  roles: string[] = [];
  constructor( public nav: NavBarService, public userService: UserService, public authService: AuthService,
               private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.nav.hide();
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
