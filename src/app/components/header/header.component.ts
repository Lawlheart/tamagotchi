import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = [{
    name: 'Home',
    path: ''
  }, {
    name: 'Credits',
    path: 'credits'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
