import { Component, OnInit } from '@angular/core';
import { DataService, Product } from './data.service';
import { TableColumn } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  columns: TableColumn[] = [
    {
      key: 'productName',
      label: 'Product Name',
      filterType: 'text',
    },
    {
      key: 'bestBeforeDate',
      label: 'Best Before Date',
      filterType: 'date',
    },
    {
      key: 'qualityCode',
      label: 'Quality Code',
      filterType: 'text',
    },
    {
      key: 'lotNumber',
      label: 'Lot Number',
      filterType: 'text',
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((p: any) => {
      this.products = p;
    });
  }

  filterFn(data: Product, column: string, filterValue: any): boolean {
    const value = data[column];
    if (typeof filterValue === 'string') {
      return value.toLowerCase().includes(filterValue.toLowerCase());
    } else if (filterValue instanceof Date) {
      return (
        (value as Date).getFullYear() === filterValue.getFullYear() &&
        (value as Date).getMonth() === filterValue.getMonth() &&
        (value as Date).getDate() === filterValue.getDate()
      );
    }
    return false;
  }
}
