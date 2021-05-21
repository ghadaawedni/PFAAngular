import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
