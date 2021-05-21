import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
