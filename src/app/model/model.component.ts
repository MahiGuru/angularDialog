import { ModelConfig } from './config.model';
import { ModelDialogComponent } from './../model-dialog/model-dialog.component';
import { Component, OnInit, Input, EventEmitter, Output, ContentChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public animal: Observable<string>;
  @Input() config: ModelConfig;
  @Input() autoFocus: boolean;
  @Input() disableClose: boolean;
  @Input() height: any;
  @Input() id: string;
  @Input() width: any;
  @Input() leftBtnText: string;
  @Input() rightBtnText: string;

  @Output() closeDialog: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {
    this.autoFocus = false;
    this.disableClose = false;

  }
  ngOnInit() {

  }
  openDialog(): void {
    console.log(this.disableClose, this.height, this.width);
    const dialogRef = this.dialog.open(ModelDialogComponent, {
      autoFocus: this.autoFocus,
      disableClose: this.disableClose,
      height: this.height,
      width: this.width,
      id: this.id,
      data: {
        component: this.config.component,
        title: this.config.title,
        leftBtnText: this.config.leftBtnText,
        rightBtnText: this.config.rightBtnText
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.animal = result;
      this.closeDialog.emit(this.animal);
    });
  }

}
