import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface FilterDialogData {
  type: 'text' | 'date' | 'select';
  options?: string[];
}

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent {
  value: string | Date;

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(): void {
    this.dialogRef.close(this.value);
  }
}
