import { Component, Input, OnInit } from '@angular/core';

/**
 * Services
 */
import { CrudService } from './../../services/firebase/crud.service';

@Component({
  selector: 'bonamondo-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() params;

  dataSource: any;
  displayedColumns: any = [];
  errors = [];

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    if(this.params) {
      if(!this.params.firebaseReference) {
        this.errors.push({
          cod: 'bm-dt-01',
          message: "Definir referência para consulta no firebase (params.firebaseReference: string)"
        });
      }

      if(!this.params.firebasePropertiesToShow) {
        this.errors.push({
          cod: 'bm-dt-02',
          message: "Definir campos e seus títulos a serem mostrados na tabela (params.firebasePropertyToShow: any = [{title: string, propertyName: string}])"
        });
      }

      if(!this.params.firebasePropertiesToShow[0].title) {
        this.errors.push({
          cod: 'bm-dt-03',
          message: "Definir títulos a serem mostrados na tabela (params.firebasePropertyToShow: any = [{title: string}])"
        });
      }

      if(!this.params.firebasePropertiesToShow[0].propertyName) {
        this.errors.push({
          cod: 'bm-dt-04',
          message: "Definir campos a serem mostrados na tabela (params.firebasePropertyToShow: any = [{propertyName: string}])"
        });
      }
    } else {
      this.errors.push({
        cod: 'p-01',
        message: "Definir parâmetros mínimos do componente"
      });
    }

    if(this.errors.length < 1) {
      let crudReadParams = {
        ref: this.params.firebaseReference
      }
      
      this.crud.read(crudReadParams)
      .then(res => {
        this.dataSource = res;
      })
    }

    for(let lim = this.params.firebasePropertiesToShow.length, i =0; i < lim; i++) {
      console.log(this.params.firebasePropertiesToShow[i].propertyName);
      this.displayedColumns[i] = this.params.firebasePropertiesToShow[i].propertyName;
    }
  }
}
