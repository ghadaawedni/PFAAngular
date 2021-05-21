import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public nav: NavBarService) {
  }

  ngOnInit(): void {
    this.nav.show();
  }

}
