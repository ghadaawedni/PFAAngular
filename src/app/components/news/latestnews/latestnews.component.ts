import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {

  constructor(public nav: NavBarService) { }
  events: Array<{id: number, text: string}> = [
    {id: 1, text: 'التظاهرات'},
    {id: 2, text: 'التظاهرات القادمة'},
    {id: 3, text: 'كفالة يتيم'},
  ];
  evName: string;
  ngOnInit(): void {
    this.nav.show();
  }

changed()
{
 console.log('clicked');
}
}
