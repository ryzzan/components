import { Component, Input, OnInit } from '@angular/core';

/**Services */
import { CrudService } from './../../services/firebase/crud.service'

@Component({
  selector: 'bonamondo-form-autocomplete-multiple',
  templateUrl: './form-autocomplete-multiple.component.html',
  styleUrls: ['./form-autocomplete-multiple.component.css']
})
export class FormAutocompleteMultipleComponent implements OnInit {
  @Input() params;
  /**
   * params.array: string
   * params.placeholder: string
   * params.description: string
   * params.value: string
   */
  
  errors = [];

  constructor(private crud: CrudService) { }

  ngOnInit() {
    if(this.params) {
      if(!this.params.array) {
        this.errors.push({
          cod: 'bfam-lo-01',
          message: "Definir array do autocomplete"
        });
      }

      if(!this.params.description) {
        this.errors.push({
          cod: 'bfam-lo-02',
          message: "Definir campo da array que serve como descrição do autocomplete"
        });
      }

      if(!this.params.value) {
        this.errors.push({
          cod: 'bfam-lo-03',
          message: "Definir campo da array que serve de valor do autocomplete"
        });
      }

      if(!this.params.placeholder) {
        this.errors.push({
          cod: 'bfam-lo-04',
          message: "Definir placeholder do autocomplete"
        });
      }
    } else {
      this.errors.push({
        cod: 'p-01',
        message: "Definir parâmetros mínimos do componente"
      });
    }
  }
}