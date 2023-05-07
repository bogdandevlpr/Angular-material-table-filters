import { Component } from '@angular/core';

interface TableColumn {
  key: string;
  label: string;
  filterType?: 'text' | 'date' | 'dropdown';
  dropdownOptions?: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableColumns: TableColumn[] = [
    {
      key: 'date',
      label: 'Date',
      filterType: 'date',
    },
    {
      key: 'name',
      label: 'Name',
      filterType: 'text',
    },
    {
      key: 'category',
      label: 'Category',
      filterType: 'dropdown',
      dropdownOptions: [
        { value: 'A', label: 'Category A' },
        { value: 'B', label: 'Category B' },
        { value: 'C', label: 'Category C' },
      ],
    },
  ];

  tableData = [
    { date: '2023-05-01', name: 'Item 1', category: 'A' },
    { date: '2023-05-02', name: 'Item 2', category: 'B' },
    { date: '2023-05-03', name: 'Item 3', category: 'A' },
    { date: '2023-05-04', name: 'Item 4', category: 'C' },
    { date: '2023-05-05', name: 'Item 5', category: 'A' },
    { date: '2023-05-06', name: 'Item 6', category: 'B' },
  ];
}
