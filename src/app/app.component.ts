import { DynamicComponent } from './model/model.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = {
    component: DynamicComponent,
    title: 'Mahipal'
  };
  constructor() {

  }
  public closeDailog(val) {
      console.log('APP COMPONENT ', val);
    }

}
