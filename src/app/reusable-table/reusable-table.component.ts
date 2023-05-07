import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface TableColumn {
  key: string;
  label: string;
  filterType?: 'text' | 'date' | 'dropdown';
  dropdownOptions?: any[];
}

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
})
export class ReusableTableComponent implements OnInit {
  @Input() columns: TableColumn[];
  @Input() data: any[];

  displayedColumns: string[];
  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.displayedColumns = this.columns.map((column) => column.key);
    this.dataSource.data = this.data;
  }

  onFilterApplied(columnKey: string, filterValue: string) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data[columnKey].toLowerCase().includes(filter.toLowerCase());
    };

    this.dataSource.filter = filterValue;
  }
}
