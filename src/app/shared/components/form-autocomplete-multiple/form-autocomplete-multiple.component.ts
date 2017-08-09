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
   * params.ref: string
   * params.placeholder: string
   * params.description: string
   * params.value: string
   */
  
  array: any;
  error: any;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.array = [];
    this.setArray();
  }

  setArray = () => {
    this.crud.read({
      ref: this.params.ref
    })
    .then(res => {
      let temp, description, value;
      temp = res;
      for(let lim = temp.length, i = 0; i < lim; i++) {
        for(let key in temp[i]) {
          if(key === this.params.description) {
            description = temp[i][key];
          }

          if(key === this.params.value) {
            value = temp[i][key];
          }
        }
        this.array.push({
          description: description,
          value: value
        })
      };
    })
  }
}
