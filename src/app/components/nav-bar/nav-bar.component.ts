import { Component, OnInit } from '@angular/core';
import { NavBarService } from './nav-bar.service';
import {TokenStorageService} from '../auth/token-storage.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private roles: string[];
  public authority: string;
  constructor( public  nav: NavBarService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.roles = this.tokenStorage.getAuthorities();
    //   this.roles.every(role => {
    //     if (role === 'ROLE_ADMIN') {
    //       this.authority = 'admin';
    //       return false;
    //     }
    //     this.authority = 'beneficiary';
    //     return true;
    //   });
    // }
  }
  show(): void
  {
  }

}
