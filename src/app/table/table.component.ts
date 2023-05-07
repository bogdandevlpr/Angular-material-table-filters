import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {
  FilterDialogComponent,
  FilterDialogData,
} from '../filter-dialog/filter-dialog.component';

export interface TableColumn {
  key: string;
  label: string;
  filterType: FilterDialogData['type'];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() filterFn: (data: any, column: string, filterValue: any) => boolean;

  displayedColumns: string[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column) => column.key);
  }

  applyFilter(column: TableColumn): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '250px',
      data: { type: column.filterType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.data = this.data.filter((row) =>
          this.filterFn(row, column.key, result)
        );
        this.table.renderRows();
      }
    });
  }
}
