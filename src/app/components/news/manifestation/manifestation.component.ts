import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-manifestation',
  templateUrl: './manifestation.component.html',
  styleUrls: ['./manifestation.component.css']
})
export class ManifestationComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
