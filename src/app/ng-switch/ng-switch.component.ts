import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  numero: number = 0;

  incrementar(){
    this.numero++;
  }
}
