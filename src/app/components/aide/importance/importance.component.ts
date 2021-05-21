import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css']
})
export class ImportanceComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
