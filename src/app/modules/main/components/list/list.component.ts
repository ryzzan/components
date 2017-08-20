import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  paramsToBonaMondoDataTable: any;

  constructor() { }

  ngOnInit() {
    this.paramsToBonaMondoDataTable = {
      firebaseReference: 'countries',
      firebasePropertiesToShow: [{
        title: 'País',
        propertyName: 'continent_pt'
      }, {
        title: 'Iniciais',
        propertyName: 'initials'
      }]
    }
  }

}
