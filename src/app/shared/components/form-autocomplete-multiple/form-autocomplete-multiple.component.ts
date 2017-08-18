import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
   * params.source: string
   * <if source: firebase>params.firebaseRef: string
   * params.placeholder: string
   * params.description: string
   * params.value: string
   * params.keepSelectedItem: boolean
   * params.objectPresentation: string (chip | list)
   */
  
  addToObjectButton: boolean = false;
  array = [];
  bfamForm: FormGroup;
  errors = [];
  filteredArray: any;
  objectArray = [];
  objectTemp: any;  

  constructor(private crud: CrudService) {
    this.bfamForm = new FormGroup({
      'bfam': new FormControl(null)
    })
  }

  ngOnInit() {
    if(this.params) {
      switch(this.params.source) {
        case 'array':
        break;
        
        case 'firebase':
          if(!this.params.firebaseRef) {
            this.errors.push({
              cod: 'bfam-lo-01',
              message: "Definir referência do firebase para montar opções do autocomplete ({ firebaseRef: 'referenceParaOsDadosFirebase' })"
            });
          }
        break;

        default:
          this.errors.push({
            cod: 'bfam-lo-00',
            message: "Definir source no autocomplete ({ source: 'array' ou 'firebase' })"
          });  
      }

      if(!this.params.description) {
        this.errors.push({
          cod: 'bfam-lo-02',
          message: "Definir campo da array que serve como descrição do autocomplete ({ description: 'nomeDoCampo' })"
        });
      }

      if(!this.params.value) {
        this.errors.push({
          cod: 'bfam-lo-03',
          message: "Definir campo da array que serve de valor do autocomplete ({ value: 'nomeDoCampo' })"
        });
      }

      if(!this.params.placeholder) {
        this.errors.push({
          cod: 'bfam-lo-04',
          message: "Definir placeholder do autocomplete  ({ placeholder: 'nome' })"
        });
      }

      if(!this.params.objectPresentation) {
        this.params.objectPresentation = 'chip';
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

  onAddToObjectTemp(event) {
    console.log(event);
    this.addToObjectButton = true;
    
    this.objectTemp = this.array.filter(obj => {
      return obj.value == event.srcElement.value;
    }); 

    console.log(this.objectTemp[0]);
  }

  onAddToObject(event) {
    this.addToObjectButton = false;
    this.bfamForm.get('bfam').patchValue(null);
    this.objectArray.push(this.objectTemp[0]);
    
    if(!this.params.keepSelectedItem) { //tirar elemento selecionado da array do autocomplete
      this.array = this.array.filter(obj => {        
        return obj.value != this.objectTemp[0].value;
      });

      this.filteredArray = this.array;
    }

    this.objectTemp = null;
    console.log(this.objectArray);
  }

  onClearObjectArrayItem = (index) => {
    if(!this.params.keepSelectedItem) {
      //Objeto que sai da listagem de objetos selecionados volta pra array de objetos do autocomplete
      this.array.push(this.objectArray[index]);
      //TO-DO: A array de objetos do autocomplete é reordenada

      this.filteredArray = this.array;
    }
    
    this.objectArray.splice(index, 1);
  }


  onFilterDescription(val) {
    this.addToObjectButton = false;

    let r = val.srcElement.value;
    
    if(val != null) {
      this.filteredArray = this.array.filter(s => s.description.toLowerCase().indexOf(r.toLowerCase()) === 0)
    } else {
      this.filteredArray = this.array;
    }
    
    return this.filteredArray;
  }
}