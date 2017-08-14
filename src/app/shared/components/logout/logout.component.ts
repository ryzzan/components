import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Services
 */
import { AuthenticationService } from './../../services/firebase/authentication.service';

@Component({
  selector: 'bonamondo-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Input() params: any;

  errors = [];
  mdIcon: string;

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    if(this.params) {
      if(!this.params.mdIcon) {
        this.mdIcon = "exit_to_app";
      }

      if(!this.params.route) {
        this.errors.push({
          cod: 'bm-lo-01',
          message: "Definir rota do logout"
        });
      }
    } else {
      this.errors.push({
        cod: 'p-01',
        message: "Definir parâmetros mínimos do componente"
      });
    }
  }

  logout = () => {
    this.authentication.logout();
    this.router.navigate(this.params.route);
  }
}
