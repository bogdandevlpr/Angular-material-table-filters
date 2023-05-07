import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss'],
})
export class CustomFilterComponent {
  @Output() filterApplied = new EventEmitter<string>();

  applyFilter(value: string) {
    this.filterApplied.emit(value);
  }
}
