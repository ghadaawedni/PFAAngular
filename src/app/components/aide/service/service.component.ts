import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
