import { Component, OnInit } from '@angular/core';

/**Services */
import { CrudService } from './../../shared/services/firebase/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  paramsToAutompleteMultiple: any;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.paramsToAutompleteMultiple = {
      ref: "countries",
      placeholder: "Countries",
      description: 'country_name_pt',
      value: 'initials'
    };
  }

}
