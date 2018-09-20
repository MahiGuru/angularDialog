import {
  Component, OnInit, Inject, ViewContainerRef, ViewChild, ComponentRef,
  ComponentFactoryResolver, OnDestroy, AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css']
})
export class ModelDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;
  portal: ComponentPortal<any>;
  componentRef: ComponentRef<any>;
  public title = 'My Dialog';
  public leftBtnText = 'Cancel';
  public rightBtnText = 'Ok';

  constructor(
    public dialogRef: MatDialogRef<ModelDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cdr: ChangeDetectorRef) {
  }
  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    this.cdr.detectChanges();
  }
  ngOnInit() {
    this.title = (this.data.title) ? this.data.title : this.title;
    this.leftBtnText = (this.data.leftBtnText) ? this.data.leftBtnText : this.leftBtnText;
    this.rightBtnText = (this.data.rightBtnText) ? this.data.rightBtnText : this.rightBtnText;
  }
  cancelBtnClick() {
    this.dialogRef.close(true);
  }
  okBtnClick() {
    this.dialogRef.close(this.componentRef.instance);
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
