import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
