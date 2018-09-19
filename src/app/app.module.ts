import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ModelComponent, DynamicComponent } from './model/model.component';
import { ModelDialogComponent } from './model-dialog/model-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModelDialogComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [ModelDialogComponent, DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
