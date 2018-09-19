import { ModelDialogComponent } from './../model-dialog/model-dialog.component';
import { Component, OnInit, Input, EventEmitter, Output, ContentChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public animal: Observable<string>;
  @Input() mydata: any;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {
    this.animal = new Observable();
  }
  ngOnInit() {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModelDialogComponent, {
      width: '250px',
      data: { component: this.mydata.component, title: 'Mahipal', age: 32 }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.closeDialog.emit(this.animal);
    });
  }

}

@Component({
  selector: 'app-dynamic-comp',
  template: `
  <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Input">
      </mat-form-field>

      <mat-form-field>
        <textarea matInput placeholder="Textarea"></textarea>
      </mat-form-field>

      <mat-form-field>
        <mat-select placeholder="Select">
          <mat-option value="option">Option</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `
})
export class DynamicComponent {

}
