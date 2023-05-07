import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ReusableTableComponent, CustomFilterComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  exports: [ReusableTableComponent, CustomFilterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
