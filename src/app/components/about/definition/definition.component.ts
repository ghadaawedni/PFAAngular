import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../nav-bar/nav-bar.service';
@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {


  constructor( public nav: NavBarService) {
  }

  ngOnInit(): void {
    this.nav.show();
  }

}
