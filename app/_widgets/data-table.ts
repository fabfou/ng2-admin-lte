import { Component, Input } from 'angular2/core';

@Component({
  selector: 'data-table',
  templateUrl: 'app/_widgets/data-table.html'
})
export class DataTableComponent {
  @Input()
  title: string;

  @Input() 
  data: [];

  @Input()
  columns: [];
}