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
export class FormComponent implements OnInit {
  formAutoCompleteMultipleParams: any;

  constructor(private crud: CrudService) {
    
  }

  ngOnInit() {
    this.formAutoCompleteMultipleParams = { 
      source: 'firebase',       
      firebaseRef: 'countries',
      description: 'countryNameInPortuguese',
      value: 'countryNameInPortuguese',
      placeholder: 'Países'
    }
  }

  getResultedArray(event){
    console.log(event);
  }
}
