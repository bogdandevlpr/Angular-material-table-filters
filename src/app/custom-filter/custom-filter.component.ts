import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss'],
})
export class CustomFilterComponent {
  @Output() filterApplied = new EventEmitter<any>();

  applyFilter() {
    // Implement your custom filtering logic here
    const filteredData = null; // filtered data based on your custom logic
    this.filterApplied.emit(filteredData);
  }
}
