import {Component, OnInit} from 'angular2/core';
import {TableEntriesService} from '../services/table-entries.service';
import {Entry} from '../interfaces/entry';

@Component({
  selector: 'sr-table-selection',
  templateUrl: './app/views/table-selection.html',
  inputs: ['table']
})
export class TableSelectionComponent implements OnInit {
  public table: string;
  public entries: Entry[];

  constructor(private _tableEntriesService: TableEntriesService) { }
  
  getTableEntries() {
    this._tableEntriesService.getTableEntries(this.table).then(entries => this.entries = entries);
  }
  // on input variable change
  // ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
  //   if (changes['table'].currentValue) {
  //     console.log("Change: " + changes['table'].currentValue);
  //   }
  // }

  // on app load, do this:
  ngOnInit() {
    this.getTableEntries();
  }
}