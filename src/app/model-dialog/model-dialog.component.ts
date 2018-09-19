import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css']
})
export class ModelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModelDialogComponent>,
       @Inject(MAT_DIALOG_DATA) public data: any) {
      }

    ngOnInit() {
      console.log('INSIDE DATA ', this.data);
    }
    close() {
      this.dialogRef.close(this.data);
    }

}
