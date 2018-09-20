import { Component } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-comp',
  template: `
  <div class="example-container">
      <form [formGroup]="myForm">
          <mat-form-field>
            <input matInput placeholder="Input" formControlName="input">
          </mat-form-field>

          <mat-form-field>
            <textarea matInput placeholder="Textarea" formControlName="textarea"></textarea>
          </mat-form-field>

          <mat-form-field>
            <mat-select placeholder="Select"  formControlName="select">
              <mat-option value="option">Option</mat-option>
            </mat-select>
          </mat-form-field>
      </form>
    </div>
  `
})
export class DynamicComponent {
  public myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      input: new FormControl('', []),
      textarea: new FormControl('', []),
      select: new FormControl('', [])
    });

  }
}
