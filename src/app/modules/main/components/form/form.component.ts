import { Component, OnInit, OnChanges } from '@angular/core';

/**
 * Services
 */
 import { CrudService } from './../../../../shared/services/firebase/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  formAutoCompleteMultipleParams: any;
  constructor(private crud: CrudService) {
    
  }

  ngOnInit() {
    this.formAutoCompleteMultipleParams = {        
      firebaseRef: 'countries',
      description: 'country_name_pt',
      value: 'country_name_pt',
      placeholder: 'País'
    }
  }

  ngOnChanges() {
    this.crud.read({
      ref: 'countries'
    })
    .then(res => {
      console.log(res);
      this.formAutoCompleteMultipleParams = {        
        array: res
      }
    })
  }

}
