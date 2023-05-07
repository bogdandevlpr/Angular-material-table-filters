import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent, FilterDialogComponent, TableComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  exports: [FilterDialogComponent, TableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
