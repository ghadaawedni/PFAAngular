import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
