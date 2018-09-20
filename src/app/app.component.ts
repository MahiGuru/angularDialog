import { Component } from '@angular/core';
import { DynamicComponent } from './model/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = {
    component: DynamicComponent,
    title: 'My Dialog',
    leftBtnText: 'Close',
    rightBtnText: 'OK'
  };
  constructor() {

  }
  public closeDailog(val) {
    console.log('APP COMPONENT ', val);
  }

}
