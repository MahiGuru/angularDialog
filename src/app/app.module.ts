import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { ModelComponent } from './model/model.component';
import { ModelDialogComponent } from './model-dialog/model-dialog.component';
import { DynamicComponent } from './model/dynamic.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
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
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    PortalModule
  ],
  providers: [],
  entryComponents: [ModelDialogComponent, DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
