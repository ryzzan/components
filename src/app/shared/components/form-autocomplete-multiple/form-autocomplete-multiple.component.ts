import { Component, Input, OnInit, OnChanges } from '@angular/core';

/**Services */
import { CrudService } from './../../services/firebase/crud.service'

@Component({
  selector: 'bonamondo-form-autocomplete-multiple',
  templateUrl: './form-autocomplete-multiple.component.html',
  styleUrls: ['./form-autocomplete-multiple.component.css']
})
export class FormAutocompleteMultipleComponent implements OnInit {
  @Input() params;
  
  filteredArray: any;
  /**
   * params.array: string
   * params.placeholder: string
   * params.description: string
   * params.value: string
   */
  
  errors = [];
  array = [];

  constructor(private crud: CrudService) { }

  ngOnInit() {
    if(this.params) {
      if(!this.params.firebaseRef) {
        this.errors.push({
          cod: 'bfam-lo-01',
          message: "Definir referência do firebase para montar opções do autocomplete"
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

      this.crud.read({
        ref: this.params.firebaseRef
      })
      .then(res => {
        let obj = Object.keys(res).map(k => res[k]);
        let array = [];

        for(let lim = obj.length, i= 0; i < lim; i++) {
          array.push({
            description: obj[i][this.params.description],
            value: obj[i][this.params.value]
          })          
        }

        this.array = array;
        this.filteredArray = array;
      })
    } else {
      this.errors.push({
        cod: 'p-01',
        message: "Definir parâmetros mínimos do componente"
      });
    }
  }

  filterDescription(val) {
    let r = val.srcElement.value;
    
    if(val != null) {
      this.filteredArray = this.array.filter(s => s.description.toLowerCase().indexOf(r.toLowerCase()) === 0)
    } else {
      this.filteredArray = this.array;
    }
    
    return this.filteredArray;
  }
}