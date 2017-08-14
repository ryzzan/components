import { Component, OnInit } from '@angular/core';

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
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.read({
      route: 'countries'
    })
    .then(res => {
      console.log(res)
      this.formAutoCompleteMultipleParams = {
        array: res
      }
    })
  }

}
