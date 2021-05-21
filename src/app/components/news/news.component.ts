import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
