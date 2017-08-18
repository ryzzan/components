import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bonamondo-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {
  /**
   * params.menuStructure
   * params.menuStructure.description
   * params.menuStructure.route
   * params.menuStructure.mdIcon
   */
  @Input() params;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate = (route) => {
    this.router.navigate([route]);
  }
}
