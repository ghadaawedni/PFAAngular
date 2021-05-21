import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
