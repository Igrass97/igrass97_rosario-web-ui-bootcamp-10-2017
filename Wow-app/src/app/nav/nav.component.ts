import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  viewNav: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNav(){
    this.viewNav = !this.viewNav;
  }

  hideNav(){
    this.viewNav = false;
  }

}
