import { Injectable } from '@angular/core';

/*Firebase*/
import { fbDatabase } from './../../../../environments/firebase-database-config';

@Injectable()
export class CrudService {
  error: any;
  constructor() { }

  create = (params) => {

  }

  read = (params) => new Promise((resolve, reject) => {
    let key, obj, ref, res, objFiltered;

    if(!params.ref) {
      return this.error = {
        code: "r-01",
        description: "Reference to firebase required"
      }
    } 

    ref = fbDatabase.ref(params.ref);

    ref
    .once('value')
    .then(snap => {
      if(snap.val() != null) {
        res = snap.val();
        key = Object.keys(res);
        obj = Object.keys(res).map(k => res[k]); //Tranformando objetos em arrays
        
        for(let i=0; i<Object.keys(res).length; i++){
          obj[i].__key = key[i];
        }
        
        if(params.show) {
          for(let i= 0; i < obj.length; i++) {
            let temp = {};

            for(let j = 0; j < params.show.length; j++) {
              temp[params.show[j]] = obj[i][params.show[j]];
            }

            /*Object.keys(obj[i])
            .map(k => {
              for(let j = 0; j < params.show.length; j++) {
                if(k == params.show[j]) {
                  temp[k] = obj[i][k];
                }
              }
            })*/
            objFiltered.push(temp);
          }
          
          obj = objFiltered;
          console.log(res);
          resolve(obj);
        } else {
          resolve(obj);
        }
      } else {
        resolve({
          cod: "ra-03",
          message: "Nenhum cadastro"//É preciso declarar ao menos um child"
        });
      }
    })
  })
}
