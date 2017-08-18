import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  paramsToLogout: any;
  paramsToMenuToolbar: any;

  constructor() { }

  ngOnInit() {
    this.paramsToLogout = {
      route: ['/login']
    }

    this.paramsToMenuToolbar = {
      menuStructure: [{
        description: 'Forms',
        route: '/main/form',
        mdIcon: 'assignment'
      }, {
        description: 'Lists',
        route: '/main/list',
        mdIcon: 'view_list'
      }]
    }
  }
}
