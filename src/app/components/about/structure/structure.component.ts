import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../nav-bar/nav-bar.service';
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor( public nav: NavBarService) {
  }
  ngOnInit(): void {
    this.nav.show();
  }
}
